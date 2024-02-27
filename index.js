let inpuut = document.querySelectorAll("input");
let campo = document.querySelectorAll('label');
const borda = document.getElementsByClassName('fontered');
const vermeha = document.getElementsByClassName('bordaRed');
const verdee = document.getElementsByClassName('bordagreen');


// gostaria de tirar as calsses antes de apertar no botao novamente, poderia me explicar pq isso não funciona ?

// inpuut[i].addEventListener("click", () => {
//     inpuut.className = "";
//     campo.className = "";
// })


function demo() {
 
    for (let i = 0; i < inpuut.length; i++) {

        let verificar2 = inpuut[i].value;
        console.log(verificar2);

        if (verificar2 !== "") {
            inpuut[i].classList.add("bordagreen");

        } else {
            inpuut[i].classList.add("bordaRed");
            campo[i].classList.add("fontered");
            
        }
    }
    // como posso colocar uma verificação de preenchimetos de todos os inputs, pra so depois levar a outra pafina ./index2 ou um link aqui mesmo no js?
 }








