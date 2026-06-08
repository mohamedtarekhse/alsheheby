import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import type { Group } from "three";

function TruckTrailer({ rotationY }: { rotationY: number }) {
  const group = useRef<Group>(null);

  useFrame(() => {
    if (!group.current) return;
    // smooth interpolate toward target rotation
    const target = rotationY;
    group.current.rotation.y += (target - group.current.rotation.y) * 0.08;
    group.current.position.y = Math.sin(performance.now() * 0.0015) * 0.05;
  });

  const blue = "#0070F2";
  const deep = "#0b3a7a";
  const chrome = "#cfd8e3";
  const tire = "#171a1f";
  const glass = "#7fb2ff";

  // Wheel helper
  const Wheel = ({ position }: { position: [number, number, number] }) => (
    <group position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.22, 24]} />
        <meshStandardMaterial color={tire} roughness={0.9} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.17, 0.17, 0.24, 16]} />
        <meshStandardMaterial color={chrome} metalness={0.9} roughness={0.25} />
      </mesh>
    </group>
  );

  return (
    <group ref={group} position={[0, -0.4, 0]} scale={0.95}>
      {/* TRAILER box */}
      <mesh position={[-1.6, 0.85, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.5, 1.4]} />
        <meshStandardMaterial color={"#f6f8fc"} metalness={0.2} roughness={0.45} />
      </mesh>
      {/* Trailer blue band */}
      <mesh position={[-1.6, 1.35, 0.701]}>
        <planeGeometry args={[3.0, 0.35]} />
        <meshStandardMaterial color={blue} />
      </mesh>
      <mesh position={[-1.6, 1.35, -0.701]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3.0, 0.35]} />
        <meshStandardMaterial color={blue} />
      </mesh>
      {/* Trailer chassis */}
      <mesh position={[-1.6, 0.18, 0]}>
        <boxGeometry args={[3.2, 0.12, 1.2]} />
        <meshStandardMaterial color={deep} metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Trailer wheels (4 axles x 2 sides) */}
      {[-2.6, -2.0, -1.0, -0.4].map((x) => (
        <group key={x}>
          <Wheel position={[x, 0.05, 0.65]} />
          <Wheel position={[x, 0.05, -0.65]} />
        </group>
      ))}

      {/* CAB */}
      <mesh position={[1.6, 0.95, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 1.55, 1.35]} />
        <meshStandardMaterial color={blue} metalness={0.4} roughness={0.35} />
      </mesh>
      {/* Cab hood */}
      <mesh position={[2.35, 0.55, 0]} castShadow>
        <boxGeometry args={[0.6, 0.7, 1.25]} />
        <meshStandardMaterial color={blue} metalness={0.4} roughness={0.35} />
      </mesh>
      {/* Windshield */}
      <mesh position={[1.05, 1.35, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.7, 1.15]} />
        <meshStandardMaterial color={glass} metalness={0.9} roughness={0.05} transparent opacity={0.85} />
      </mesh>
      {/* Side windows */}
      <mesh position={[1.6, 1.35, 0.681]}>
        <planeGeometry args={[1.1, 0.55]} />
        <meshStandardMaterial color={glass} metalness={0.9} roughness={0.05} />
      </mesh>
      <mesh position={[1.6, 1.35, -0.681]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.1, 0.55]} />
        <meshStandardMaterial color={glass} metalness={0.9} roughness={0.05} />
      </mesh>
      {/* Bumper / grille */}
      <mesh position={[2.7, 0.35, 0]}>
        <boxGeometry args={[0.12, 0.35, 1.3]} />
        <meshStandardMaterial color={chrome} metalness={0.95} roughness={0.2} />
      </mesh>
      {/* Headlights */}
      <mesh position={[2.71, 0.6, 0.45]}>
        <boxGeometry args={[0.03, 0.18, 0.25]} />
        <meshStandardMaterial color={"#fff6c8"} emissive={"#fff2a8"} emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[2.71, 0.6, -0.45]}>
        <boxGeometry args={[0.03, 0.18, 0.25]} />
        <meshStandardMaterial color={"#fff6c8"} emissive={"#fff2a8"} emissiveIntensity={0.6} />
      </mesh>
      {/* Stacks */}
      {[0.55, -0.55].map((z) => (
        <mesh key={z} position={[1.15, 1.95, z]}>
          <cylinderGeometry args={[0.06, 0.06, 0.8, 12]} />
          <meshStandardMaterial color={chrome} metalness={0.95} roughness={0.2} />
        </mesh>
      ))}
      {/* Cab wheels */}
      <Wheel position={[2.1, 0.05, 0.65]} />
      <Wheel position={[2.1, 0.05, -0.65]} />
      <Wheel position={[1.1, 0.05, 0.65]} />
      <Wheel position={[1.1, 0.05, -0.65]} />

      {/* Brand stripe / logo plate */}
      <mesh position={[-1.6, 0.85, 0.702]}>
        <planeGeometry args={[1.2, 0.4]} />
        <meshStandardMaterial color={deep} />
      </mesh>
    </group>
  );
}

export default function TrailerScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when section enters viewport bottom, 1 when leaves top
      const total = rect.height + vh;
      const passed = vh - rect.top;
      const progress = Math.max(0, Math.min(1, passed / total));
      // Rotate up to 2 full turns
      setRotation(progress * Math.PI * 2.2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[80vh] w-full">
      <Canvas
        shadows
        camera={{ position: [5.5, 3.2, 6.5], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#f3f6fb"]} />
        <fog attach="fog" args={["#e6edf7", 12, 22]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[6, 8, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, 4, -3]} intensity={0.5} color="#9ec6ff" />
        <Suspense fallback={null}>
          <TruckTrailer rotationY={rotation} />
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -0.41, 0]}
          opacity={0.55}
          scale={14}
          blur={2.4}
          far={4}
        />
        {/* ground reflection plate */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.41, 0]} receiveShadow>
          <circleGeometry args={[7, 64]} />
          <meshStandardMaterial color="#e7edf6" roughness={0.7} />
        </mesh>
      </Canvas>
    </div>
  );
}
