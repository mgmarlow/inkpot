# Recycle

A template for creating interactive fiction with [ink](https://github.com/inkle/ink).

[View the demo](https://mgmarlow.github.io/recycle/)

## Prerequisites

- Use this template in Github to create your new project
- Download [inklecate](https://github.com/inkle/ink/releases).
- Download [yarn](https://yarnpkg.com/).
- Install packages `yarn install`.
- Replace `./story/main.ink` with your story

## Run

View your story in the `inklecate` CLI:

```
make run
```

## Build

Build your story into JavaScript:

```
make
```

The story will be playable and distributable from `./public/index.html`.

## Distribute

### Itch.io

Distributing a game on itch.io:

1. Build the project: `make`
2. Zip the `public/` directory and rename it, e.g. `my-game.zip`
3. Upload the game as an [HTML project in itch.io](https://itch.io/docs/creators/html5)

### Github Pages

Assuming that your project has a public Github repository, you can publish to [Github pages](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

```
make deploy
```
