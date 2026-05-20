import {num} from './randomNum.js';
let pick = 1
if (num === pick) {
  console.log('draw')
}else {
  if (num === 1 && pick === 2) {
    console.log('player win')
  }
  if (num === 2 && pick === 3) {
    console.log('player win')
  }
  if (num === 3 && pick === 1) {
    console.log('player win')
  }
}