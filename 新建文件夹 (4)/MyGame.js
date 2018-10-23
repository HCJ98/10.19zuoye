var randomNumber=Math.floor((Math.random()*101));
//console.log(randomNumber);
//document.write(randomNumber);


var guessField =document.querySelector('#guessField');
console.log(guessField);

var guesses = document.querySelector('.guesses');
console.log(guessField.Value);


var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');

var guessCoutn=1;//获取随机数
var resstButton;
guessField.focus(); //获取焦点

function checkGuess()//方法体  关键字CheckGuess
{ 
   // console.log('我是函数体')
guesses.textContent += guessField.value+" ";//返回输入的te
guesses.style.backgroundColor="red";
}

guessSubmit.addEventListener('click',checkGuess);
