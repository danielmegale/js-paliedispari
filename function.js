// Funzione Parole al contrario
function reverseWord(Word){

    let result='';
    const reverse=Word.toLowerCase();
    for(let i= reverse.length-1; i>=0 ; i--){
        console.log(reverse.charAt(i)); 
        result+=reverse.charAt(i);
    }
    if(result === reverse){
        stampWord.innerHTML+=`<p>La parola è palindroma: ${result}</p>`;
    }else{
        stampWord.innerHTML+=`<p>La parola al contrario è: ${result}</p>`;
    }
}


//Funzione pari o dispari
function eveonOdd(shot){
    const a=parseInt(shot)
    console.log(shot)
    if(a>5){
        console.log('valore errato')
    }else{
        const pcThrow=Math.floor(Math.random() * 5 +1);
        let sum= a + pcThrow;    
        console.log(sum);
        let evenOdd=option.value;
        if(evenOdd == (sum % 2)){
            stampthrow.innerHTML+=`<p>Hai vinto</p>`;
            console.log(stampthrow);
            return 0;
        }else{
            stampthrow.innerHTML+=`<p>Hai perso</p>`;
            console.log();
        }
    }
}