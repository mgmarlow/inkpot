const Story = require("inkjs").Story;
const json = require("../story/main.ink.json");

const story = new Story(json);
console.log(story.ContinueMaximally());
