const play = {
    targetnum : null,
    attempt : 0,
    init(){
        const start = parseInt(document.getElementById('num1').value);
        const end = parseInt(document.getElementById('num2').value);
        if(isNaN(start) || isNaN(end) || start>=end){
            alert('Please enter a valid starting and ending range!');
            return;
        }
        this.targetnum = Math.floor(Math.random()*(end-start+1))+start;
        this.attempt = 0;
        this.updateMessage('');
        document.querySelector('.hidden').style.display = 'none';
    },
    makeGuess(guess){
        this.attempt++;
        if(guess===this.targetnum){
            this.result(`you got this in ${this.attempt} tries!`,'sucess');
            document.querySelector('.hidden').style.display = 'block';
            document.getElementById('hints').textContent='';
            document.querySelector('.answer').textContent = `the number was ${this.targetnum}`;
            document.querySelector('.main').style.backgroundColor ='green';
            return true;
        }
        const hint = guess > this.targetnum ? 'Too high' : 'Too low' ;
        this.updateMessage(hint);
        return false;
    },
    updateMessage(text,type=''){
        const messageEl= document.getElementById('hints');
        messageEl.textContent=text;
        messageEl.className = type;
    },
    result(text,type=''){
        const result = document.getElementById('message');
        result.textContent=text;
        result.className=type;
    }
};

function handleGuess(){
    const input = document.getElementById('guess');
    const start = parseInt(document.getElementById('num1'));
    const end = parseInt(document.getElementById('num2'));
    const guess = parseInt(input.value);
    if(isNaN(guess) || guess<start || guess>end){
        play.updateMessage(`please enter number between ${start} and ${end}`);
        return;
    }
    play.makeGuess(guess);
    input.value='';
    input.focus();
}

function resetGame(){
    play.init();
    document.getElementById('guess').value='';
    document.getElementById('num1').value='';
    document.getElementById('num2').value='';
    document.getElementById('message').textContent = '';
    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.main').style.backgroundColor ='#c9717180';
}
