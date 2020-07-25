build:
	inklecate ./story/main.ink
	yarn build

deploy: build
	yarn deploy

run:
	inklecate -p ./story/main.ink
