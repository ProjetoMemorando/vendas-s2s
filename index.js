function gerarMemo() {
    let inputClaroAppTV = document.getElementById('inputClaroAppTV').value;
    let inputClaroBoxTV = document.getElementById('inputClaroBoxTV').value;
    let inputVirtua = document.getElementById('inputVirtua').value;
    let fidelidade = document.querySelector("input[name='fidelidade']:checked");
    let oferta = document.querySelector('input[name="oferta"]:checked');
    let debitoAutomatico = document.getElementById('debitoAutomatico');
    let areaResultado = document.getElementById('resultado');
    let textAreaResultado = document.getElementById('areaResultado');
    let descDebito = 5;
    let isChecked = debitoAutomatico.checked;
    
    

    if (isChecked) {
        descDebito = 5;
    } else {
        descDebito = 0;
    }

    let valor1 = parseFloat(inputClaroAppTV) || 0;
    let valor2 = parseFloat(inputClaroBoxTV) || 0;
    let valor3 = parseFloat(inputVirtua) || 0;
    let valor4 = parseFloat(descDebito) || 0;
    let soma_bruta = valor1 + valor2 + valor3 - valor4;
    let soma = soma_bruta.toFixed(2)

    if(!fidelidade) {
        alert('Favor informar se será COM Fidelidade ou SEM Fidelidade');

    } else {
        if(!oferta) {
            alert('Favor marcar se a oferta foi Aceita ou Recusada');

        } else {
            areaResultado.style.display = 'block';
            if (oferta.value == 'oferta_aceita') {
                let isChecked = debitoAutomatico.checked;
                if (!isChecked) {
                    debitoAutomatico.value = 'sem desconto do débito automático'
                }
                memorando_aceito = `Contrato realizado com sucesso N° XXXXXXXX, ${fidelidade.value}, sob serviços de Streaming Claro App TV por R$ ${valor1}, Claro Box TV por R$ ${valor2}, Internet Residencial Virtua GPON/HFC por R$ ${valor3}, ${debitoAutomatico.value}, ficando no valor total mensal de R$ ${soma}.\nInstalação agendada para XX/XX/XXXX no horário entre as XX:XX e as XX:XX, cliente ciente de que é necessário alguém maior de 18 anos para receber a equipe técnica para a instalação e que o endereço não pode estar em obras!`

                textAreaResultado.textContent = memorando_aceito;
            }

            if (oferta.value == 'oferta_recusada') {
                let isChecked = debitoAutomatico.checked;
                if (!isChecked) {
                    debitoAutomatico.value = 'sem desconto do débito automático'
                }
                memorando_recusa = `Realizado a oferta de Streaming Claro App TV por R$ ${valor1}, Claro Box TV por R$ ${valor2}, Internet Residencial Virtua GPON/HFC por R$ ${valor3} ${fidelidade.value}, ${debitoAutomatico.value}, ficando no valor total mensal de R$ ${soma}.\nCliente recusa a oferta no momento por motivos de: `

                textAreaResultado.textContent = memorando_recusa;
            }
        }
    }

}

function calcularSoma() {
    let inputClaroAppTV = document.getElementById('inputClaroAppTV').value;
    let inputClaroBoxTV = document.getElementById('inputClaroBoxTV').value;
    let inputVirtua = document.getElementById('inputVirtua').value;
    let debitoAutomatico = document.getElementById('debitoAutomatico');
    let descDebito = 5;
    let isChecked = debitoAutomatico.checked;

    if (isChecked) {
        descDebito = 5;
    } else {
        descDebito = 0;
    }

    let valorTotal = document.getElementById('valorTotal');

    let valor1 = parseFloat(inputClaroAppTV) || 0;
    let valor2 = parseFloat(inputClaroBoxTV) || 0;
    let valor3 = parseFloat(inputVirtua) || 0;
    let valor4 = parseFloat(descDebito) || 0;
    let soma_bruta = valor1 + valor2 + valor3 - valor4;
    let soma = soma_bruta.toFixed(2)
    valorTotal.value = soma;
}

// Adicionar event listeners para os inputs
inputClaroAppTV.addEventListener('input', calcularSoma);
inputClaroBoxTV.addEventListener('input', calcularSoma);
inputVirtua.addEventListener('input', calcularSoma);
debitoAutomatico.addEventListener('click',calcularSoma);