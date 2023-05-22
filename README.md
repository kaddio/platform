# Platform
This repository is a monorepo with several independent applications. Some share deployment strategy, see below.

## Deployment
Currently on Render via a Render [Infrastrucure as code configuration](https://render.com/docs/infrastructure-as-code) and Cloudflare Worker

### Github Action
[Github Action]https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions

### Render
[Infrastrucure as code configuration](https://render.com/docs/infrastructure-as-code)

### Cloudflare
[Wrangler.toml](https://developers.cloudflare.com/workers/get-started/guide/https://render.com/docs/infrastructure-as-code)


## Web
Kaddio web site built with Svelte and Tailwind
[next.kaddio.com](https://next.kaddio.com)

## Changelog
Kaddio changelog built with Next and Tailwind
[changelog.kaddio.com](https://changelog.kaddio.com)


## Jitsi
Jaas video hosted single page for delivering "call.kaddio.com"
[call.kaddio.com](https://call.kaddio.com)


## Proxy
Experiment with a simple Node server and a proxy in Docker. Hopefully this will be an alternative to Quotaguard until Kaddio moves to hosting with static IP's

## Image resizer
Resizes images via url, currently deployed on Cloudflare via Github Action and wrangler.toml.