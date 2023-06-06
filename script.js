// Prendo gli elementi dal DOM
const userWord= document.getElementById('pali');
const userDice=document.getElementById('dice');
const wordBtn =document.getElementById('pali-btn');
const diceBtn =document.getElementById('dice-btn');
const stampWord=document.getElementById('word')
let result='';
wordBtn.addEventListener('click',function(){

    const reverse=userWord.value;

    for(let i= reverse.length-1; i>=0 ; i--){
        console.log(reverse.charAt(i)); 
        result+=reverse.charAt(i);
    }
    stampWord.innerHTML+=`<p>${result}</p>`
})