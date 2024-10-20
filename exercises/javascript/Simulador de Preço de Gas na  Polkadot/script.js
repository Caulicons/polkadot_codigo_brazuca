document.getElementById('calcular').addEventListener('click', function () {
  // Captura os valores inseridos pelo usuário 
  let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
  let complexidade = document.getElementById('complexidade').value;
  let precoGas;


  // Definição de preço do gas por complexidade 
  switch (complexidade) {

    case 'baixa':
      precoGas = 0.01;
      break;
    case 'media':
      precoGas = 0.05;
      break;
    case 'alta':
      precoGas = 0.1;
      break;
  }

  // Calcula o custo total do gas 
  let custoGas = valorTransacao * precoGas;

  // Lidar com as moedas 
  const moeda = document.getElementById('moedas').value;
  let valorDaMoeda;
  // Definir o valor da moeda
  switch (moeda) {
    case 'USD':
      valorDaMoeda = custoGas * 5
      break
    case 'BRL':
      valorDaMoeda = custoGas * 2
      break
    case 'EUR':
      valorDaMoeda = custoGas * 6
      break
  }

  console.log(transactions);

  if (transactions.length > 0) {
    const div = document.getElementById('historico')
    console.log(div);

    div.innerHTML = `
      <ul id="transactions"> ${transactions.map(t => `
        <li id="transaction" > 
          Valor da Transação: ${t.valorTransacao}
          Complexidade: ${t.complexidade}
          Custo do Gas: ${t.valorGas}
          tempo: ${t.tempo}
        </li>`)}
      </ul>`
  }

  // Exibe o resultado 
  if (valorTransacao > 0) {
    if (idInterval)
      clearInterval(idInterval)

    document.getElementById('resultado').innerHTML = `
          
          <p>Valor da Transação: ${valorTransacao} DOT</p> 
          <p>Complexidade: ${complexidade.charAt(0).toUpperCase() +
      complexidade.slice(1)}</p> 
            <p> Valor Moeda: ${new Intl.NumberFormat(undefined, { style: "currency", currency: moeda }).format(valorDaMoeda)}
          <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p> 
          <p>Will be removed in: <span id="countdown">60
      </span> 🗑️<p/>
      `;

    // Count register
    counterTransaction()

    // Remove register in 60 seconds
    countDown(60)

    //Register Transaction
    registerTransactions(valorTransacao, complexidade, custoGas)
  } else {
    document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, insira um valor de transação válido.</p > ';
  }
})

function counterTransaction() {
  const transactions = document.getElementById('transactions')
  transactions.innerHTML = `<span> ${Number(transactions.textContent) + 1} </span>`
}

let idInterval
function countDown(timer) {
  idInterval = setInterval(() => {
    if (timer == 2) {
      clearInterval(idInterval)
      document.getElementById('resultado').innerHTML = `
      `
    }

    document.getElementById('countdown').innerHTML = `<span id = "countdown" > ${--timer
      } <span />`
  }, 1000)

}

const transactions = []
function registerTransactions(valorTransacao, complexidade, custoGas) {

  transactions.push({
    valorTransacao,
    complexidade,
    custoGas,
    tempo: new Date().getTime()
  })
}