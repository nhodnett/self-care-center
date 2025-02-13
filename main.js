// data to work with - affirmations or mantras
var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
]

var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."
]
// Query Selectors go here
var selectAffirmationButton = document.querySelector('#affirmation'); //Syntax?
var selectMantraButton = document.querySelector('#mantra'); //Syntax?
var receiveMessageButton = document.querySelector('.receive-message');
var randomMessageDisplay = document.querySelector('.random-message-display');
var image = document.querySelector('.main-image')
var clearMessageButton = document.querySelector('.clear-message');

// Event Listeners go here
receiveMessageButton.addEventListener('click', randomMessage);
clearMessageButton.addEventListener('click', clearMessage);

// functions and event handlers go here
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

var newAffirmation;
var newMantra;

function randomMessage(event) {
  event.preventDefault()
  newAffirmation = affirmations[getRandomIndex(affirmations)];
  newMantra = mantras[getRandomIndex(mantras)];
  // console.log(newAffirmation, newMantra)
    if (selectAffirmationButton.checked === true) {
      randomMessageDisplay.innerText = `${newAffirmation}`;
      hide(image);
      show(randomMessageDisplay);
      show(clearMessageButton);
      //image.classList.add('hidden');
      //randomMessageDisplay.classList.remove('hidden');
  } else if (selectMantraButton.checked === true) {
      randomMessageDisplay.innerText = `${newMantra}`;
      show(randomMessageDisplay);
      hide(image);
      show(clearMessageButton);
      //image.classList.add('hidden');
      //randomMessageDisplay.classList.remove('hidden');
  }
}

function clearMessage() {
  if (newAffirmation || newMantra === true) {
    newAffirmation = '';
    newMantra = '';
    hide(randomMessageDisplay);
    show(image);
    hide(clearMessageButton);
//console.log(newAffirmation, newMantra)
  }
}
