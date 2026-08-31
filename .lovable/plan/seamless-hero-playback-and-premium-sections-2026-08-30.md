# Seamless Hero Playback and Premium Sections

## Build
- Convert the supplied hero clip into one forward-and-reverse video file so the browser can loop it natively without pausing or visibly restarting.
- Simplify the hero video component to native autoplay, muted, inline, continuous loop playback, with a small recovery handler if playback is interrupted.
- Add two premium full-width sections in the existing BROION visual language: a botanical composition/index section and a small-batch craft/process section.
- Keep the existing hero composition, full-opacity video, typography, content, palette, and page structure intact.

## Technical details
- Generate a web-ready H.264 loop asset from the current video using a forward + reversed sequence.
- Use semantic theme tokens and existing typography classes for all new UI.
- Verify the latest build diagnostics and confirm playback plus page rendering in the live browser.
