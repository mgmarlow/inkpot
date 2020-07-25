# ✒️ Inkpot

A template for creating interactive fiction with [ink](https://github.com/inkle/ink).

[View the demo](https://mgmarlow.github.io/inkpot/)

## Roadmap

- [x] Watchmode
- [ ] Story save states

## Prerequisites

- [inklecate](https://github.com/inkle/ink/releases).
- [yarn](https://yarnpkg.com/) or [npm](https://nodejs.org/en/)

## Installation

- [Use this template](https://github.com/mgmarlow/inkpot/generate) to create your new project
- Install packages `yarn install` or `npm install`.
- Replace `./story/main.ink` with your story

Once you're all set up, use the following command to run Inkpot with a development server:

```
yarn start
```

## Distribute

### Build your story

Build your story into JavaScript:

```
yarn build
```

The story will be playable and distributable from `./public/index.html`.

### Itch.io

Distributing a game on itch.io:

1. Build the project: `make`
2. Zip the `public/` directory and rename it, e.g. `my-game.zip`
3. Upload the game as an [HTML project in itch.io](https://itch.io/docs/creators/html5)

### Github Pages

Assuming that your project has a public Github repository, you can publish to [Github pages](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

```
yarn deploy
```
