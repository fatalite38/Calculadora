// CALCULADORA 1

//function insert para inserir os numeros no display
function insert(num) {
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

// function clean para limpar o display da calculadora
function clean(){ 
    document.getElementById('display').innerHTML = '';
}

// function BACK PARA voltar uma casa
function back() { 
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
}
//function Calcular com o uso do eval para realizar as operações
function calcular() {
    var resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML = eval(resultado);
    }
}







// Calculadora 2 usando apenas o ALERT do browser

/*function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));
        
    if (!operacao || operacao >= 7) {
        alert('Operação inválida! Tente novamente');
        calculadora();
    }else {
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novoCalculo();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novoCalculo();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novoCalculo();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novoCalculo();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`${n1} na divisão inteira por ${n2}\n\nResultado = ${resultado}`);
            novoCalculo();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado á ${n2}\n\n Resultado = ${resultado}`);
            novoCalculo();
        }

        function novoCalculo(){
            let opcao = prompt('Deseja fazer outro calculo?\n 1 - Sim\n 2 - Não');

            if (opcao ==1) {
                calculadora();
            }else if (opcao == 2){
                alert('Calculo encerrado!')
            }else {
                alert('Digite uma opção válida!')
                novoCalculo();
            }
        }
        
        if (operacao == 1) {
            soma();
        }else if(operacao == 2) {
            subtracao()
        }else if(operacao == 3) {
            multiplicacao()
        }else if(operacao == 4) {
            divisaoReal()
        }else if(operacao == 5) {
            divisaoInteira()
        }else if(operacao == 6) {
            potenciacao()
        }else if (operacao >= 7){
            alert('Escolha um calculo válido!')
            novoCalculo()
        }
    }
}
*/
