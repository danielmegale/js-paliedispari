// Prendo gli elementi dal DOM
const userWord= document.getElementById('pali');
const userThrow=document.getElementById('throw');
const wordBtn =document.getElementById('pali-btn');
const throwBtn =document.getElementById('throw-btn');
const stampWord=document.getElementById('word')
const evenOdd=document.getElementById('even-odd')


wordBtn.addEventListener('click',function(){
    reverseWord(userWord.value)
})




throwBtn.addEventListener('click',function(){
    const pcThrow=Math.floor(Math.random() * 5 +1)
    let sum= userThrow + pcThrow
    console.log(userThrow.value,pcThrow)    
    
})