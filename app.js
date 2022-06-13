'use strict';

let userName = prompt("Welcome to the Matt Quiz, what is your name?");

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
  while (i >= 0) {
    if (i === 0) {
      alert('Sorry ' + userName + ' , you are out of attempts. Matt is 37 years old.');
      break;
    }
    let response6 = prompt (quizQ6);
    if (response6 === '37') {
      console.log(userName + ' has answered Question 6 correctly');
      alert('CORRECT! Well done ' + userName + '. You have guessed Matt\'s age');
      quizScore++;
      break;
    }
    if (response6 < '37') {
      alert('Not quite, Matt is older than that');
      i--;
      alert('You have ' + i + ' guesses left');
      console.log('User has ' + i + ' guesses left');
    }
    if (response6 > '37') {
      alert('Not quite, Matt is younger than that');
      i--;
      alert('You have ' + i + ' guesses left');
      console.log('User has ' + i + ' guesses left');
    }
  }

  let birthPlace = ['Seattle', 'Germany', 'San Antonio', 'Mexico', 'The Moon', 'Army Base', 'Denver'];
  let quizQ7 = 'Where was Matt Born? ' + birthPlace;
  let BP = 6;
  while (BP >= 0) {
    if (BP === 0) {
      alert('Sorry, ' + userName + ' you are out of attempts, Matt was born in Germany');
      break;
    }
    let response7 = prompt (quizQ7).toLowerCase();
    if (response7 === 'germany') {
      alert('Well done ' + userName + ' . You have guessed correctly! Matt was born on an Army Base in Germany. PROST!');
      quizScore++;
      break;
    }
    if (response7 === 'army base') {
      alert('Well done ' + userName + ' . You have guessed correctly! Matt was born on an Army Base in Germany. PROST!');
      quizScore++;
      break;
    }
    else {
      BP--;
      alert('Nope, try again. You have ' + BP + ' guesses left');
    }
  }
  alert('Thank you for taking the \"Matt Quiz\" ' + userName + ', you did great! and got ' + quizScore + ' out of 7 questions right!');
}

