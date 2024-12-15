# Migration to Next.js 15.1.0 - PoC

## Goal

Learn how difficult it is to incrementally migrate a complex SPA, made with React + Vite + React Router, to Next.js, with the ultimate goal of allowing me to choose a framework to learn/master that has all the features I need and that incentivizes good project structure and architecture.

## Methodology

I followed [the official guide](https://nextjs.org/docs/app/building-your-application/upgrading/from-vite) available in Next.js' docs.

## Results: ❌ UNSUCCESSFUL

The guide is straightforward and easy to understand. I wasn't having any issues until I stumbled upon a major one: `useParams()` wasn't working.

After some research I found [this discussion](https://github.com/vercel/next.js/discussions/64660) where people reported that `output: export` doesn't support the hook still. The issue is, to incrementally migrate an SPA to Next.js you HAVE to use this config to replicate SPA behavior -- single static HTML file with very little JS that processes everything client-side.

Some people mentioned in the post that using the legacy `/pages` folder (the default before v13) instead of `/app` solved the issue, but I don't want to commit to an older API that will eventually be discontinued.

## Final Thoughts

I wasn't expecting this at all, it is really unfortunate. Most production apps still run SPAs with Vite or Create React App and this issue makes the transition virtually impossible for most companies (until they fix it of course). The devs are aware of the issue and intend to fix it, but they haven't provided a timeline for when that will happen.
