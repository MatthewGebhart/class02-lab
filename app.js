'use strict';

let userName = prompt("Welcome to the Matt Quiz, what is your name?");

// This was a function I was going to assign to a button but I couldn't get working, I'm leaving it in in case I want to try to get it working for a future lab.

// function mattQuiz(){
//   let quizQ1 = prompt('was Matt in the Army');
//   if (quizQ1 === 'no'.toLowerCase) {
//     console.log(userName + 'has answered Question 1 correctly');
//     alert('CORRECT! Good job ' + userName); 
//   } else {
//     console.log(userName + ' has answered Question 1 incorrectly');
//     alert('Incorrect, Matt\'s father was in the Army, Matt was not'); }
// }


let quizQ1 = 'Was Matt in the Army?';
let response = prompt (quizQ1).toLowerCase();
if (response === 'no' || response === 'n') {
  console.log(userName + ' has answered Question 1 correctly');
  alert('CORRECT! Good job ' + userName); 
} else {
  console.log(userName + ' has answered Question 1 incorrectly');
  alert('Incorrect, Matt\'s father was in the Army, Matt was not'); 
}

let quizQ2 = 'Does Matt have a Dog named Snickers?';
let response2 = prompt (quizQ2).toLowerCase();
if (response2 === 'no' || response2 === 'n') {
  console.log(userName + ' has answered Question 2 correctly');
  alert('CORRECT! Good job ' + userName + ', Matt has a dog named Basha'); 
} else {
  console.log(userName + ' has answered Question 2 incorrectly');
  alert('Incorrect, Matt has a dog named Basha not Snickers'); 
}

let quizQ3 = 'Is Matt married?';
let response3 = prompt (quizQ3).toLowerCase();
if (response3 === 'yes' || response3 === 'y') {
  console.log(userName + ' has answered Question 3 correctly');
  alert('CORRECT! Good job ' + userName + ', Matt has a wife named Jenny'); 
} else {
  console.log(userName + ' has answered Question 3 incorrectly');
  alert('Incorrect, Matt is happily married'); 
}

let quizQ4 = 'Does Matt have a lot of hobbies and interests?';
let response4 = prompt (quizQ4).toLowerCase();
if (response4 === 'yes' || response4 === 'y') {
  console.log(userName + ' has answered Question 4 correctly');
  alert('CORRECT! Good job ' + userName + ', Matt has many hobbies'); 
} else {
  console.log(userName + ' has answered Question 4 incorrectly');
  alert('Incorrect, Matt has more hobbies than he has time for'); 
}

let quizQ5 = 'Does Matt want a job selling fruit to Wall Street Bankers?';
let response5 = prompt (quizQ5).toLowerCase();
if (response5 === 'no' || response5 === 'n') {
  console.log(userName + ' has answered Question 5 correctly');
  alert('CORRECT! Good job ' + userName + '. Those Bankers can get their own fruit!'); 
} else {
  console.log(userName + ' has answered Question 5 incorrectly');
  alert('Incorrect, Matt wants to write code and develop software'); 
}

alert('Thank you for taking the \"Matt Quiz\" ' + userName + ', you did great!');