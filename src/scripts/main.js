AOS.init();

const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const botoes = document.querySelector('.cabecalho__botoes');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    botoes.classList.toggle('active');
    hamburger.classList.toggle('active');

    //Adiciona/remove classe global no body
    document.body.classList.toggle('menu-aberto');
  });

const dataDoEvento = new Date("Dec 4, 2025 12:00:00"); // cria um objeto Date com a data e hora do evento.
const timeStampDoEvento = dataDoEvento.getTime(); // retorna os milissegundos da data.

const contaAsHoras = setInterval(function() { // executa uma função a cada 1000 milissegundos.
    const agora = new Date(); // cria um novo objeto Date representando o momento atual.
    const timeStampAtual = agora.getTime(); 

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // subtrai o timestamp atual do timestamp do evento.

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);

    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('data-conte').innerHTML = `FALTAM <span style="color: #ff0082;"> ${diasAteOEvento} </span> DIAS <span style="color: #ff0082;"> ${horasAteOEvento} </span> HORAS <span style="color: #ff0082;"> ${minutosAteOEvento} </span> MINUTOS <span style="color: #ff0082;"> ${segundosAteOEvento} </span> SEGUNDOS`;

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementByIde('data-conte').innerHTML = 'Evento expirado';
    }

}, 1000);