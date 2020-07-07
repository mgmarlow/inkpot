import { Story } from 'inkjs'
import json from '../story/main.ink.json'

const story = new Story(json)
console.log(story.ContinueMaximally())
