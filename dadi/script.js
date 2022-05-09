//CREO UN ARRAY CHE SIMULI IL DADO
const myDice = ['1', '2', '3', '4', '5', '6'];

//CREO UN EVENTO AL CLICK CHE PRENDE IN MOD RANDOMICO UN ELEMENTO DELL'ARRAY PER ME E PER IL PC
const myButton = document.getElementById('button');

myButton.addEventListener('click', 
function () {

    //GENERO I DUE NUMERI E LI STAMPO
        let myNumber = [Math.floor(Math.random()*myDice.length)];
        document.getElementById('my-number').innerHTML = `Il tuo numero: ${myNumber}`;

        let pcNumber = [Math.floor(Math.random()*myDice.length)];
        document.getElementById('pc-number').innerHTML = `Il tuo numero del tuo avversario: ${pcNumber}`;

        //CONFRONTO I DUE VALORI E DICHIARO IL VINCITORE
        let message = document.getElementById('win-draw-lose');
        if (myNumber > pcNumber) {
            message.innerHTML = `${myNumber} > ${pcNumber} HAI VINTO!!!`
        } else if (myNumber < pcNumber) {
            message.innerHTML = `${myNumber} < ${pcNumber} HAI PERSO!!!`
        } else {
            message.innerHTML = `${myNumber} = ${pcNumber} PAREGGIO!!!`
        }


});


