const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.item');
let count = slides.length;
const menuList = document.querySelector('.list');
let activeSlider = 0;

//* here comes my menu function
function menu(e)
{
   e.name == 'menu' ? (e.name = 'close',menuList.classList.toggle('hidden')) : (e.name = 'menu',menuList.classList.toggle('hidden'));
}
//! ends over here my menu function

//* here comes my slider functions
next.onclick =()=>{
    activeSlider += 1;
        if(activeSlider >= count){
            activeSlider = 0;
        }
        showSlides();
}

prev.onclick = ()=>{
    activeSlider -= 1;
    if(activeSlider < 0){
        activeSlider = count -1;
    }
    showSlides();
}

function showSlides(){
    let oldActiveSlider = document.querySelector(' .z-10');
    oldActiveSlider.classList.remove('z-10');
    slides[activeSlider].classList.add('z-10');
}
//! ends over here

//* functions and methods to service modals

const modalDomestica = document.querySelector('.modalDomestica');
const modalIdoso = document.querySelector('.modalIdoso');
const modalBaba = document.querySelector('.modalBaba');
const closeModal = document.querySelector('.closeModal');

function buttonDomestica(){
    modalDomestica.classList.remove('hidden');
   
}
function closeModalDomestica(){
    modalDomestica.classList.add('hidden');
}

function closeModalIdoso(){
    modalIdoso.classList.add('hidden');
}
    closeModal.onclick = () =>{
        modalBaba.classList.add('hidden');
    }

    function idosoModalButton(){
        modalIdoso.classList.remove('hidden');
    }
function babaModalButton(){
    modalBaba.classList.remove('hidden');
}
//!ends over here modals functions

//*functions to send data do whatsapp

function EnviarIdosoWhatsapp(){
    let number = "+244943479631";
    const service = 'Cuidadora de Idosos';

    let name = document.querySelector('#nameIdoso');
    let location = document.querySelector('#locationIdoso');
    let phone = document.querySelector('#telefoneIdoso');
    let semana = document.querySelector('#semanaIdoso');
    let services = document.querySelector('#serviceIdoso');
    let needs = document.querySelector('#needIdoso');

    let url = "https://wa.me/"+ number + "?text="+ "Serviço : "+ service +"%0a" 
    + "name :" + name.value + "%0a" 
     + "localização :" + location.value + "%0a"
     + "Números de Idosos : " + phone.value + "%0a"
     + "dias e horas de serviço : " + semana.value + "%0a"
     + "Tipo de serviço: " + services.value + "%0a"
     + "Necessidades do Idoso: " + needs.value + "%0a";

    window.open(url,'_blank').focus();

   name.value = '';
   phone.value='';
   location.value = '';
   semana.value = '';
   needs.value = '';
   services.value = '';
}

function EnviarWhatsappBaba(){

    const number = "+244943479631";
    const service = 'Babá';

    let name = document.querySelector('#babaName');
    let phone = document.querySelector('#telefoneBaba');
    let location = document.querySelector('#locationBaba');
    let idade = document.querySelector('#idadeBaba');
    let semana = document.querySelector('#semanaBaba');
    let select = document.querySelector('#selectbaba');

    let url = "https://wa.me/"+ number + "?text="+ "Serviço : "+ service +"%0a" 
     + "name :" + name.value + "%0a" 
     + "localização :" + location.value + "%0a"
     + "Telefone : " + phone.value + "%0a"
     + "dias e horas de serviço : " + semana.value + "%0a"
     + "Faixa étaria das crianças: " + idade.value + "%0a"
     + "Tipo de serviço: " + select.value + "%0a";

    window.open(url,'_blank').focus();

    name.value = '';
    phone.value='';
    location.value = '';
    semana.value = '';
    idade.value = '';
    select.value = '';
}

function sendDomestica(){

    let number = "+244943479631";
    const service = 'Doméstica';
    let tarefa = document.querySelectorAll('.task1');
    let newTask = [];
        tarefa.forEach((data)=>{
            if(data.checked){
                newTask.push(data.value);
            }
        });
     
    let name = document.querySelector('#nameDomestica');
    let phone = document.querySelector('#telefoneDomestica');
    let location = document.querySelector('#locationDomestica');
    let serviceDomestica = document.querySelector('#serviceDomestica');
    let semana = document.querySelector('#semanaDomestica');
    
    let url = "https://wa.me/"+ number + "?text="+ "Serviço : "+ service +"%0a" 
     + "name :" + name.value + "%0a" 
     + "localização :" + location.value + "%0a"
     + "Telefone : " + phone.value + "%0a"
     + "dias e horas de serviço : " + semana.value + "%0a"
     + "Tipo de serviço : " + serviceDomestica.value + "%0a"
     + "Tarefa de Domestica: " + newTask.join(', '); + "%0a";
    

     console.log(name, phone,location);
   window.open(url,'_blank').focus();
  

   /* name.value = '';
    phone.value='';
    location.value = '';
    semana.value = '';
    tarefa.value = '';
    serviceDomestica.value = ''; */
}
//! ends over here

function contactWhatsap(){
    let url = "https://wa.me/" + 244943479631 + "?text=";
    window.open(url,'_blank').focus();
}