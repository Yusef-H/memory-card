import { nanoid } from 'nanoid';
import arcticFox from './assets/images/arctic-fox.png';
import camel from './assets/images/camel.png';
import chicken from './assets/images/chicken.png';
import cow from './assets/images/cow.png';
import crocodile from './assets/images/crocodile.png';
import dolphin from './assets/images/dolphin.png';
import donkey from './assets/images/donkey.png';
import elephant from './assets/images/elephant.png';

const animals = [
  { id: nanoid(), name: 'Arctic Fox', img: arcticFox, isClicked: false },
  { id: nanoid(), name: 'Camel', img: camel, isClicked: false },
  { id: nanoid(), name: 'Chicken', img: chicken, isClicked: false },
  { id: nanoid(), name: 'Cow', img: cow, isClicked: false },
  { id: nanoid(), name: 'Crocodile', img: crocodile, isClicked: false },
  { id: nanoid(), name: 'Dolphin', img: dolphin, isClicked: false },
  { id: nanoid(), name: 'Donkey', img: donkey, isClicked: false },
  { id: nanoid(), name: 'Elephant', img: elephant, isClicked: false },
];

export default animals;

  