# [TASK] Add a dummy page

## Context

The repository has the `agentic-sdlc` overlay installed and needs one small end-to-end validation task executed through the issue-first flow.

This task should add a simple user-visible page to the Next.js app without changing application architecture or introducing external dependencies.

## Requirements

- add a new App Router page at `/dummy`
- give the page a clear heading and short explanatory copy
- add an obvious link from the home page to the dummy page
- add a clear link from the dummy page back to the home page

## Acceptance Criteria

- visiting `/dummy` renders the new page successfully
- the home page includes a visible navigation link to `/dummy`
- the dummy page includes a visible navigation link back to `/`
- `npm run lint` passes
- `npm run build` passes

## Target Files

- `app/page.tsx`
- `app/dummy/page.tsx`
- related style classes inline within those files only

## Notes

- use the combined topology baseline for this task
- keep the implementation narrow and UI-focused
- do not introduce new packages or framework changes
