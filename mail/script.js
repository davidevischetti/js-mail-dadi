//CREO DELLE VARIABILI PER GESTIRE LE EMAIL E IL LORO INPUT
const myEmail = document.getElementById('email').value;

const myButton = document.getElementById('button');

//CREO UN ARRAY CON LE EMAIL CHE HANNO ACCESSO
const emailList = ['dario@gmail.com', 'mario@gmail.com', 'gigio@gmail.com'];

//CREO UN EVENTO AL CLICK PER VERIFICARE LA VALIDITA DELLA EMAIL
myButton.addEventListener('click', 
function () {
    for (let i = 0; i < emailList.length; i++) {

        if (emailList[i] = myEmail) {
            document.getElementById('welcome').innerHTML = `Hello ${myEmail}, you're welcome!`;
        } else {
            document.getElementById('welcome').innerHTML = `I'm sorry ${myEmail}, you're not welcome!`;
        }
    } 
});


