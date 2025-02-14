# Next.js 15 App - Intermittent State Update Failure

This repository demonstrates a bug encountered in a Next.js 15 application where state updates become intermittent after repeated navigation between pages.  The issue appears to involve a combination of asynchronous API calls and the `useEffect` hook.

## Bug Description

The `About` page fetches a random count from an API every second.  Under normal circumstances, the count should update smoothly.  However, after navigating between pages (Home and About) multiple times, the count on the About page sometimes stops updating, remaining stuck on a previous value.  This behavior is not consistent and occurs intermittently.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate repeatedly between the Home and About pages.  After a few iterations, you'll likely notice the count on the About page stops updating.

## Solution

The solution involves using a useRef hook to maintain a stable reference to the interval, preventing the closure issue by ensuring that the clearInterval function always uses the most up to date interval reference.  See `aboutSolution.js` for details.