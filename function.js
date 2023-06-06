// Funzione Parole al contrario
function reverseWord(Word){

    let result='';
    const reverse=Word.toLowerCase();
    for(let i= reverse.length-1; i>=0 ; i--){
        console.log(reverse.charAt(i)); 
        result+=reverse.charAt(i);
    }
    if(result === reverse){
        stampWord.innerHTML+=`<p>La parola è palindroma: ${result}</p>`
    }else{
        stampWord.innerHTML+=`<p>La parola al contrario è: ${result}</p>`
    }
}


//Funzione pari o dispari
