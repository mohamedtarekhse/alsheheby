## Goal
Replace the current hero background video with footage showing heavy trailers driving on a highway, conveying safety and professionalism.

## Approach
Update `src/routes/index.tsx` hero `<video>` source to a free Pexels/Coverr stock clip of trucks/trailers on a highway. Candidate clips (royalty-free, hot-linkable MP4):

1. Pexels 3066466 — convoy of trucks on highway (wide cinematic shot)
2. Pexels 4271760 — semi-truck driving on highway, daytime
3. Pexels 5495838 — trailer on motorway, overhead drone

Default pick: **Pexels 3066466** (convoy, most "fleet + safety" feeling). Keep existing dark gradient overlay for text contrast. Poster image updated to a matching truck still from Unsplash so the first paint also shows a highway trailer.

No other sections, 3D scene, logo, or WhatsApp button change.

## Files
- `src/routes/index.tsx` — replace hero `<video src>` and `poster` URLs.

## Verification
Reload preview, confirm hero shows trailers on highway, video autoplays muted/looped, text remains readable.