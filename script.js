// Prendo gli elementi dal DOM
const userWord =document.getElementById('pali');
const userThrow =document.getElementById('user-throw');
const wordBtn =document.getElementById('pali-btn');
const throwBtn =document.getElementById('throw-btn');
const stampWord =document.getElementById('word')
const option =document.getElementById('even-odd')
const stampthrow =document.getElementById('throw')

wordBtn.addEventListener('click',function(){
    reverseWord(userWord.value);
})




throwBtn.addEventListener('click',function(){
    eveonOdd(userThrow.value);
})