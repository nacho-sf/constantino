const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
      {
        label: "Clint Eastwood",
        id: "clint-eastwood",
        name: "actor",
        value: "clint-eastwood"
      },
      {
        label: "James Earl",
        id: "james-earl",
        name: "actor",
        value: "james-earl"
      },
      {
        label: "Roger Moore",
        id: "roger-moore",
        name: "actor",
        value: "roger-moore"
      },
      {
        label: "William Shatner",
        id: "william-shatner",
        name: "actor",
        value: "william-shatner"
      },
      {
        label: "Arnold Schwarzenegger",
        id: "arnold-schwarzenegger",
        name: "actor",
        value: "arnold-schwarzenegger"
      }
    ]
};



let form = document.createElement('form');
document.body.appendChild(form);

imprimeTitulo();
imprimeTodasLasRespuestas();

function imprimeTitulo() {
  // Título
  let pTitle = document.createElement('p');
  let textTitle = document.createTextNode(pregunta.titulo);
  form.setAttribute('id','contenedorPreguntas');
  pTitle.appendChild(textTitle);
  form.appendChild(pTitle);
};

function imprimeTodasLasRespuestas() {
  for (i = 0; i < 5; i++) {
    // Label
    let label = document.createElement('label');
    let labelText = document.createTextNode(pregunta.respuestas[i].label);
    label.setAttribute('for', pregunta.respuestas[i].id);
    document.body.appendChild(form);
    form.appendChild(label);
    label.appendChild(labelText);
    // Input
    let input = document.createElement('input');
    input.setAttribute('id', pregunta.respuestas[i].id);
    input.setAttribute('name', pregunta.respuestas[i].name);
    input.setAttribute('type', 'radio');
    input.setAttribute('value', pregunta.respuestas[i].value);
    form.appendChild(input);
  };
};