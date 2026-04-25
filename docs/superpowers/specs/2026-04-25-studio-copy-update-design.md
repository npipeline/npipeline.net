# Design Spec: NPipeline Studio Copy Update

**Date:** 2026-04-25
**Topic:** studio-copy-update

## Summary
Update the description of NPipeline Studio in the `StudioSection` to better align with the site's punchy, technical tone.

## Proposed Changes
Update `app/sections/StudioSection.tsx` to replace the existing description with the selected "Runtime Observer" copy.

### Text Changes
**Old text:**
"NPipeline Studio is a visual debugging companion that lets you inspect live data flowing through every node. Trace items from source to sink, inspect transforms in real time, and catch issues before they hit production."

**New text:**
"Stop debugging in the dark. NPipeline Studio provides a high-fidelity window into your runtime, allowing you to observe data flow and inspect state as it happens. Bridge the gap between code and execution to build resilient pipelines with total clarity."

## Success Criteria
- The new text is correctly rendered in the `StudioSection`.
- The site builds without errors.
