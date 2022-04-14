function reset(){
  const divs = document.querySelectorAll('.choice-grid div');
  const image = document.querySelectorAll('.checkbox');
  for(let i of image){
    i.src = 'images/unchecked.png';
  }
  for (let d of divs){
    d.classList.remove('overlay');
    d.classList.remove('coloresfondo');
  }
  const inizio = document.querySelector('#restart');
  inizio.classList.add('fine_test');
  
  for(let i=0;i<27; i++){
    divs[i].addEventListener('click', seleziona);
  }
  risp.one= null;
  risp.two = null;
  risp.three = null;
  
}


function seleziona(event)
{
  const scelta = event.currentTarget;
  const image = scelta.querySelector('.checkbox');
  const divs = document.querySelectorAll('.choice-grid div'); 
  image.src = 'images/checked.png';
  scelta.classList.remove('overlay');
  scelta.classList.add('coloresfondo');

  sfondo(scelta);

  const choiceid = scelta.dataset.choiceId;
  const questionid = scelta.dataset.questionId;

  risp[questionid]=choiceid;
  if(risp.one !== null && risp.two !== null && risp.three !== null){
    for(let i=0;i<27; i++){
      divs[i].removeEventListener('click', seleziona);
    }
    const risultato = personality(risp);

    const h2 = document.querySelector('h2');
    const para = document.querySelector('p');
    h2.textContent = RESULTS_MAP[risultato].title;
    para.textContent = RESULTS_MAP[risultato].contents;
    
    const fine = document.querySelector('.fine_test');
    fine.classList.remove('fine_test');
   
    const botton_reset = document.querySelector('#reset');
    botton_reset.addEventListener('click', reset);

  }

}


function sfondo(risposta){
  const v1= document.querySelectorAll('.choice-grid div');
  for(const p of v1){
    if (p.dataset.choiceId !== risposta.dataset.choiceId && p.dataset.questionId === risposta.dataset.questionId){
      p.classList.remove('coloresfondo');
      const imagenot = p.querySelector('.checkbox').src = 'images/unchecked.png';
      p.classList.add('overlay');
    }
  }
}

function personality(risposta){
  
  if(risposta.one === risposta.two || risposta.one === risposta.three)
  return risposta.one;
  else if(risposta.two === risposta.three)
  return risposta.two;
  else if (risposta.one !== risposta.two && risposta.one !== risposta.three)
  return risposta.one;
   
}



const image = document.querySelectorAll('.choice-grid div');

for(let i=0;i<27; i++){
  image[i].addEventListener('click', seleziona);
}

const risp = {
  'one':null,
  'two':null,
  'three':null,
}




