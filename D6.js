/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

const logFu = (exercise, character, long) => {
  let line = "";

  for (let index = 0; index < long; index++) {
    line += character;
  }

  console.log(`\n <| ${line} ${exercise.toUpperCase()} ${line} |>`);
};

/* This movies array is used throughout the exercises. Please don't change it :)  */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

//JS Basics
logFu("Ex.A", "=", 30);

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
const test = "Strive";

logFu("Ex.B", "=", 30);
/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

const sum = 10 + 20;

logFu("Ex.c", "=", 30);

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

const random = Math.floor(Math.random() * 20) + 1;

// console.log(random);
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
logFu("Ex.D", "=", 30);
const me = {
  name: "Geury",
  surName: "Roustand",
  age: 2021 - 1991,
};

console.log(me);

logFu("Ex.e", "=", 30);
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me["age"];
console.log(me);

logFu("Ex.F", "=", 30);
/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me["skills"] = ["JavaScript", "HTML", "CSS"];

console.log(me);

logFu("Ex.g", "=", 30);
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

const removedElemet = me.skills;

const elementFillter = removedElemet.pop();

// console.log(elementFillter);

logFu("JS Functions", "😊", 30);
// JS Functions

logFu("Ex.1", "=", 30);

/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(dice(1, 6));

logFu("Ex.2", "=", 30);
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = (numb1, numb2) => {
  const biggest = numb1 > numb2 ? `${numb1}` : `${numb2}`;
  // return numb1 > numb2 ? `${numb1}` : `${numb2}`;
  return biggest;

  // if (numb1 > numb2) {
  //   return `${numb1}`;
  // } else {
  //   return `${numb2}`;
};

console.log(whoIsBigger(18, 8));

logFu("Ex.3", "=", 30);
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = (str) => {
  return str.split(" ");
};

console.log(splitMe("I love coding"));

logFu("Ex.4", "=", 30);
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = (str, boo) => {
  if (boo === true) {
    return str.slice(1);
  } else {
    return str.substring(0, str.length - 1);
    // return str.slice(0, str.length - 1);
  }
};

console.log(deleteOne("Hello", false));

logFu("Ex.5", "=", 30);
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = (str) => {
  if (str) {
    return str.replace(/[0-9]/g, "");
  }
};

console.log(onlyLetters("I have 4 dogs"));
console.log(onlyLetters("I have 10 years leaving in Germany"));

logFu("Ex.5", "=", 30);
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
const isThisAnEmail = (email) => {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
};

// console.log(isThisAnEmail("sam@hotmail.com"));
console.log(isThisAnEmail("samhotmail.com"));

logFu("Ex.6", "=", 30);
/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const whatDayIsIt = (d) => {
  return days[d.getDay()];
};

console.log(whatDayIsIt(date));

logFu("Ex.8", "=", 30);

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = (n) => {
  const amountOftime = dice(1, 6);

  // let sumVa = amountOftime + n;

  const obj = {
    sum: amountOftime + n,
    values: [amountOftime, n],
  };

  return obj;
  // console.log(amountOftime);
};

console.log(rollTheDices(3));

logFu("Ex.9", "=", 30);

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const da = "17.05.2021";

const howManyDays = (d) => {
  return parseInt("24.05.2021") - parseInt(d);
};

console.log(howManyDays(da));

logFu("Ex.10", "=", 30);

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = () => {
  const da = new Date();

  // console.log(da);
  return da === 1991 - 05 - 05 ? true : false;
};

console.log(isTodayMyBirthday());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

logFu("Ex.11", "=", 30);
/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

const objPro = {
  named: "Hola",
};

const deleteProp = (obj, str) => {
  // return (obj.named = `${str}`);
  return (obj["named"] = str);
};

deleteProp(objPro, "Samana");
console.log(objPro);

logFu("Ex.12", "=", 30);

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

// const olderMovie = movies.filter((movie) => {
//   console.log(movie.Year);
// });

const olderMovie = (mov) => {
  const oldestMovie = mov.filter((movie) => movie.Year < 2005);
  return oldestMovie;
  // console.log(oldestMovie);
};

const allOldestMov = olderMovie(movies);
console.log(allOldestMov);

logFu("Ex.13", "=", 30);

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = (mov) => {
  const totalMov = mov.forEach((_, index) => {
    console.log(index);
  });
};

countMovies(movies);

logFu("Ex.14", "=", 30);

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

const onlyTheTitles = (mov) => {
  const titles = mov.map((movie) => movie.Title);

  return titles;
  // console.log(titles);
};
const allTitles = onlyTheTitles(movies);

console.log(allTitles);

logFu("Ex.15", "=", 30);

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = (mov) => {
  const allMillenniumMov = mov.filter((movie) => movie.Year > 2000);

  return allMillenniumMov;
};

const allMi = onlyInThisMillennium(movies);

console.log(allMi);
logFu("Ex.16", "=", 30);

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

let idM = "tt0100054";
const getMovieById = (id) => {
  const MovId = movies.filter((mov) => mov.imdbID === id);
  console.log(MovId);
};

getMovieById(idM);

logFu("Ex.17", "=", 30);

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = () => {
  const totalSum = movies.reduce((acc, curr) => acc + parseInt(curr.Year), 0);

  console.log(totalSum);
};

sumAllTheYears();

logFu("Ex.18", "=", 30);

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

let movTitle = "The Avengers";

const searchByTitle = (title) => {
  const movT = movies.filter((mov) => mov.Title === title);
  console.log(movT);
};

searchByTitle(movTitle);

logFu("Ex.19", "=", 30);

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = (title) => {
  const match = [];
  const unmatch = [];

  movies.forEach((arr) => {
    if (arr.Title.includes(title)) {
      match.push(arr.Title);
    } else {
      unmatch.push(arr.Title);
    }
  });

  console.log(match);
  console.log(unmatch);
};

searchAndDivide("Avengers");

logFu("Ex.20", "=", 30);

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

const removeIndex = (n) => {
  const ar = movies.filter((arr, i) => {
    // return i !== n;

    if (i !== n) {
    }
    // if (i !== n) {
    // }
    // return
    // console.log(i);
    // if (i === n) {
    //   return arr.slice()
    // }
  });

  console.log(ar.length);
};

removeIndex(2);

console.log(movies.length);

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/
