//CREO DELLE VARIABILI PER GESTIRE LE EMAIL E IL LORO INPUT
let myEmail = document.getElementById('email').value;

const myButton = document.getElementById('button');

//CREO UN ARRAY CON LE EMAIL CHE HANNO ACCESSO
const emailList = ['dario@gmail.com', 'mario@gmail.com', 'gigio@gmail.com'];

//CREO UN EVENTO AL CLICK PER VERIFICARE LA VALIDITA DELLA EMAIL
myButton.addEventListener('click', 
function () {

    let checkEmail = false;
    
    for (let i = 0; i < emailList.length; i++) {

        if (myEmail == emailList[i]) {
            checkEmail = true;
        }
    }

    let message = document.getElementById('welcome');

    if (checkEmail == true) {
        message.innerHTML = `Hello ${myEmail}, you're welcome!`;
        console.log('wewe');
    } else {
        message.innerHTML = `I'm sorry ${myEmail}, you're not welcome!`;
        console.log('caca');
    }
});


