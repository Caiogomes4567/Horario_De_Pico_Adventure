
let dinheiro = 50;
let chanceComACrush = 100;
let guardaChuvaComprado = false;
let inventarioAberto = false;

function mudarTela(telaId) {

  const telas = document.querySelectorAll('.tela');
  telas.forEach(tela => tela.classList.remove('ativa'));
  
  const tela = document.getElementById(telaId);
  tela.classList.add('ativa');
}


function comprarGuardaChuva() {
  if (dinheiro >= 5) {
    dinheiro -= 5; // Deduz o custo
    guardaChuvaComprado = true;
    atualizarInformacoes();
    alert('Você comprou um guarda-chuva!');
    mudarTela('telaEsperarOuNao'); // Vai para a próxima tela
  } else {
    alert('Você não tem dinheiro suficiente!');
  }
}

// Função para mostrar as informações de inventário
function mostrarInventario() {
  if (!inventarioAberto) {
    alert(`Inventário: \nDinheiro: R$ ${dinheiro}\nChance com a Crush: ${chanceComACrush}%\nGuarda-Chuva: ${guardaChuvaComprado ? 'Sim' : 'Não'}`);
    inventarioAberto = true;
  } else {
    inventarioAberto = false;
  }
}

// Função para atualizar as informações exibidas
function atualizarInformacoes() {
  // Atualiza as informações de dinheiro e chance
  const dinheiroElement = document.getElementById('dinheiro');
  const chanceElement = document.getElementById('chance');
  
  dinheiroElement.textContent = `Dinheiro: R$ ${dinheiro}`;
  chanceElement.textContent = `Chance com a Crush: ${chanceComACrush}%`;
}

// Função para exibir uma mensagem de fim de jogo
function fimDeJogo(mensagem) {
  alert(mensagem);
  mudarTela('telaInicio'); // Vai para a tela de início
  atualizarInformacoes(); // Atualiza as informações ao reiniciar
}

// Função para começar a aventura novamente
function recomeçar() {
  dinheiro = 50;
  chanceComACrush = 100;
  guardaChuvaComprado = false;
  atualizarInformacoes();
  mudarTela('telaInicio');
}

// Funções de escolha do jogo

// Caso o jogador espere muito
function esperarMuito() {
  fimDeJogo("Você esperou tanto que perdeu a oportunidade! Tente novamente.");
}

// Caso o jogador escolha sair do metrô
function sairDoMetro() {
  fimDeJogo("Você saiu do metrô e se perdeu na cidade. Tente novamente.");
}


// Caso o jogador espere no ônibus
function esperarNoOnibus() {
  fimDeJogo("O ônibus quebrou e você ficou preso! Tente novamente.");
}

// Caso o jogador decida sair do ônibus
function sairDoOnibus() {
  // Chama a imagem "estranho" com 2 opções
  mudarTela('telaEstranho');
}


function irPeloBueiro() {
  fimDeJogo("Você entrou no esgoto e acabou preso! Tente novamente.");
}


function continuarCorrendo() {
  // Exibe a tela de "Continuar Correndo" com a opção de parar e explicar a história
  const continuarCorrendoTela = document.getElementById('telaContinuarCorrendo');
  continuarCorrendoTela.classList.add('ativa');
}

// Caso o jogador pare e explique a história
function pararEExplicarHistoria() {
  mudarTela('telaParadoAi'); // Chama a tela "paradoai"
}


function naoExisteAmor() {
  fimDeJogo("Você está sem esperança, mas não desista, recomece!");
}


function ajudar() {
  if (dinheiro >= 35) {
    dinheiro -= 35; // Deduz 35 reais
    atualizarInformacoes();
    alert("Você ajudou e perdeu 35 reais.");
    mudarTela('telaPegarBus'); // Vai para a próxima tela após ajudar
  } else {
    alert("Você não tem dinheiro suficiente para ajudar!");
    mudarTela('telaPegarBus'); // Vai para a próxima tela mesmo sem ajudar
  }
}


function ignorar() {
  mudarTela('telaPegarBus'); 

atualizarInformacoes();


function verificarDinheiro() {
  if (dinheiro <= 0) {
    fimDeJogo("Você ficou sem dinheiro! Tente novamente.");
  }
}

