const Modal = {
  open(){      
    document.querySelector('.modal-overlay').classList.add('active');
  },

  close(){
    document.querySelector('.modal-overlay').classList.remove('active');
  }
}

//dados da tabela
const transaction = [
  {
    id:1,
    description: 'Luz',
    amount:-25000,
    date:23/01/2021,
  },

  {
    id:2,
    description: 'Criação website',
    amount:500000,
    date:23/01/2021,
  },

  {
    id:3,
    description: 'Internet',
    amount:-12000,
    date:23/01/2021,
  }
];

const Transaction = {
  incomes(){
    //somar as entradas
  },

  expenses(){
    //somar as saidas
  },

  saldo(){
    //totalEntrada - totalSaida
  }
}

//Preciso pegar os dados do array transaction
//e preencher na tabela construída em HTML
const DOM = {
  addTransaction(transaction, index){
    console.log("cheguei aqui");
    const tr = document.createElement('tr');
    tr.innerHTML = DOM.innerHTMLTransaction();
  },

  innerHTMLTransaction(){
    const html = `
      <td class="description">Luz</td>
      <td class="expense"> -R$500,00</td>
      <td class="date">23/01/2021</td>
      <td><img src="assets/minus.svg" alt="Remover transação"/></td>
    `;
    return html;
  }
}

DOM.addTransaction();