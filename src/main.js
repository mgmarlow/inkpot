import { Story } from 'inkjs'
import json from '../story/main.ink.json'

// Adapted from inkjs examples:
// https://github.com/y-lohse/inkjs/blob/master/templates/browser_with_server/main.js

const story = new Story(json)
const storyContainer = document.querySelector('#story')
continueStory()

function showAfter(delay, el) {
  setTimeout(function () {
    el.classList.add('show')
  }, delay)
}

function continueStory() {
  let delay = 0.0

  // Generate story text - loop through available content
  while (story.canContinue) {
    // Get ink to generate the next paragraph
    const paragraphText = story.Continue()

    // Create paragraph element
    const paragraphElement = document.createElement('p')
    paragraphElement.innerHTML = paragraphText
    storyContainer.appendChild(paragraphElement)

    // Fade in paragraph after a short delay
    showAfter(delay, paragraphElement)

    delay += 200.0
  }

  // Create HTML choices from ink choices
  story.currentChoices.forEach(choice => {
    // Create paragraph with anchor element
    const choiceParagraphElement = document.createElement('p')
    choiceParagraphElement.classList.add('choice')
    choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`
    storyContainer.appendChild(choiceParagraphElement)

    // Fade choice in after a short delay
    showAfter(delay, choiceParagraphElement)
    delay += 200.0

    // Click on choice
    const choiceAnchorEl = choiceParagraphElement.querySelectorAll('a')[0]
    choiceAnchorEl.addEventListener('click', e =>
      handleChoiceClick(e, choice.index),
    )
  })

  storyContainer.lastChild.scrollIntoView({ behavior: 'smooth' })
}

function handleChoiceClick(event, choiceIndex) {
  // Don't follow <a> link
  event.preventDefault()

  const hrElement = document.createElement('hr')
  storyContainer.appendChild(hrElement)

  // Remove all existing choices
  const existingChoices = storyContainer.querySelectorAll('p.choice')
  existingChoices.forEach(choice => {
    choice.parentNode.removeChild(choice)
  })

  // Tell the story where to go next
  story.ChooseChoiceIndex(choiceIndex)

  // Aaand loop
  continueStory()
}
