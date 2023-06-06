// Prendo gli elementi dal DOM
const userWord= document.getElementById('pali');
const userDice=document.getElementById('dice');
const wordBtn =document.getElementById('pali-btn');
const throwBtn =document.getElementById('throw-btn');
const stampWord=document.getElementById('word')



wordBtn.addEventListener('click',function(){
    console.log('ciao')
    reverseWord(userWord.value)
})




// diceBtn.addEventListener('click',function(){

// })