console.log('estoy funcionando');

const txtOp1 = document.getElementById('operator1');
const op = document.getElementById('operacion');
const txtOp2 = document.getElementById('operator2');
const bCalcular = document.getElementById('button');
const pResult = document.getElementById('result');

const Calculate = () => {
  const operacion = op.value;
  const op1 = parseFloat(txtOp1.value);
  const op2 = parseFloat(txtOp2.value);

  if ((
    operacion == '/' ||
    operacion == '*' ||
    operacion == '-' ||
    operacion == '+' ) &
    !isNaN(op1) &
    !isNaN(op2)
  ) {
    let resultado;
    switch (operacion) {
      case '+':
        resultado = op1 + op2;
        break;
      case '/':
        resultado = op1 / op2;
        break;
      case '-':
        resultado = op1 - op2;
        break;
      case '*':
        resultado = op1 * op2;
        break
    }
    pResult.style = "color:black"
    pResult.innerText = `el resultado es ${resultado}`
  } else {
    pResult.innerText = 'calculo imposible'
    pResult.style = "color:red"
  }
};
