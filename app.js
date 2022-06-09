'use strict';

let userName = prompt("Welcome to the Matt Quiz, what is your name?");

// // This was a function I was going to assign to a button but I couldn't get working, I'm leaving it in in case I want to try to get it working for a future lab.

// // function mattQuiz(){
// //   let quizQ1 = prompt('was Matt in the Army');
// //   if (quizQ1 === 'no'.toLowerCase) {
// //     console.log(userName + 'has answered Question 1 correctly');
// //     alert('CORRECT! Good job ' + userName); 
// //   } else {
// //     console.log(userName + ' has answered Question 1 incorrectly');
// //     alert('Incorrect, Matt\'s father was in the Army, Matt was not'); }
// // }

let quizScore = 0;

function mattQuiz(){

let quizQ1 = 'Was Matt in the Army?';
let response = prompt (quizQ1).toLowerCase();
if (response === 'no' || response === 'n') {
  console.log(userName + ' has answered Question 1 correctly');
  alert('CORRECT! Good job ' + userName);
  quizScore++; 
} 
else {
  console.log(userName + ' has answered Question 1 incorrectly');
  alert('Incorrect, Matt\'s father was in the Army, Matt was not'); 
}

let quizQ2 = 'Does Matt have a Dog named Snickers?';
let response2 = prompt (quizQ2).toLowerCase();
if (response2 === 'no' || response2 === 'n') {
  console.log(userName + ' has answered Question 2 correctly');
  alert('CORRECT! Good job ' + userName + ', Matt has a dog named Basha');
  quizScore++; 
} 
else {
  console.log(userName + ' has answered Question 2 incorrectly');
  alert('Incorrect, Matt has a dog named Basha not Snickers'); 
}

let quizQ3 = 'Is Matt married?';
let response3 = prompt (quizQ3).toLowerCase();
if (response3 === 'yes' || response3 === 'y') {
  console.log(userName + ' has answered Question 3 correctly');
  alert('CORRECT! Good job ' + userName + ', Matt has a wife named Jenny');
  quizScore++; 
} 
else {
  console.log(userName + ' has answered Question 3 incorrectly');
  alert('Incorrect, Matt is happily married'); 
}

let quizQ4 = 'Does Matt have a lot of hobbies and interests?';
let response4 = prompt (quizQ4).toLowerCase();
if (response4 === 'yes' || response4 === 'y') {
  console.log(userName + ' has answered Question 4 correctly');
  alert('CORRECT! Good job ' + userName + ', Matt has many hobbies');
  quizScore++; 
} 
else {
  console.log(userName + ' has answered Question 4 incorrectly');
  alert('Incorrect, Matt has more hobbies than he has time for'); 
}

let quizQ5 = 'Does Matt want a job training otters to do tricks?';
let response5 = prompt (quizQ5).toLowerCase();
if (response5 === 'no' || response5 === 'n') {
  console.log(userName + ' has answered Question 5 correctly');
  alert('CORRECT! Good job ' + userName + '. Training otters is Matt\'s backup plan.');
  quizScore++; 
} 
else {
  console.log(userName + ' has answered Question 5 incorrectly');
  alert('Incorrect, Matt wants to write code and develop software'); 
}

let quizQ6 = 'How old is Matt?';
let i = 4;
while (i > 0) {
  let response6 = prompt (quizQ6);
  if (response6 === '37') {
    console.log(userName + ' has answered Question 6 correctly');
    alert('CORRECT! Well done ' + userName + '. You have guessed Matt\'s age');
    quizScore++;
    break;
  }
  if (response6 < '37') {
    alert('Not quite, Matt is older than that');
    alert('You have ' + i + ' guesses left');
    console.log('User has ' + i + ' guesses left');
    i--;
  } 
  if (response6 > '37') {
    alert('Not quite, Matt is younger than that');
    alert('You have ' + i + ' guesses left');
    console.log('User has ' + i + ' guesses left');
    i--;
  } 
}

let birthPlace = ['Seattle', 'Germany', 'San Antonio', 'Mexico', 'The Moon', 'Denver'];
let quizQ7 = 'Where was Matt Born? ' + birthPlace;
let BP = 6;
while (BP > 0) {
  let response7 = prompt (quizQ7).toLowerCase();
  if (response7 === 'germany') {
    alert('PROST! ' + userName + '. You have guessed Matt\'s birthplace');
    quizScore++;
    break;
  }
  else {
    alert('Nope, try again. You have ' + i + ' guesses left');
    i--;
  }
} 
alert('Thank you for taking the \"Matt Quiz\" ' + userName + ', you did great! and got ' + quizScore + ' out of 7 questions right!');
}
//below invokes the mattQuiz function.
//mattQuiz();
