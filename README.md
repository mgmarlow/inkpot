# Recycle

An interactive fiction project made with [ink](https://github.com/inkle/ink).

## Prerequisites

- Download [inklecate](https://github.com/inkle/ink/releases).
- Download [yarn](https://yarnpkg.com/).
- Install packages `yarn install`.

Place the entry point to your story in `./story/main.ink`.

## Run

```
make run
```

## Build

```
make
```

The story will be playable and distributable from `./public/index.html`.

## Distribute

Distributing a game on itch.io:

1. Build the project: `make`
2. Zip the `public/` directory and rename it, e.g. `my-game.zip`
3. Upload the game as an [HTML project in itch.io](https://itch.io/docs/creators/html5)
