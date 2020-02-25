var contadorMaterias = [0, 0, 0, 0, 0, 0, 0, 0];
var checkMaterias = [false, false, false, false, false, false];
var seleccionarItems = document.querySelector('#seleccionar-items');

function checkMateriasMante() {
  checkAdmManteSW()
  checkAuxManteSW()
  checkAdmManteHW()
  checkAuxManteHW()
}

function checkMateriasDesa() {
  checkAdmDesa()
  checkAuxDesa()
}

function checkAdmComputo() {
  controlarContadorMaterias([0,1,2,5,7], checkMaterias[0])
  checkMaterias[0] = !checkMaterias[0]
}
function checkAdmDesa() {
  controlarContadorMaterias([0,2,3,4,7], checkMaterias[1])
  checkMaterias[1] = !checkMaterias[1]
}
function checkAuxDesa() {
  controlarContadorMaterias([0,2,3,4], checkMaterias[2])
  checkMaterias[2] = !checkMaterias[2]
}
function checkAdmManteSW() {
  controlarContadorMaterias([0,1,5,6,7], checkMaterias[3])
  checkMaterias[3] = !checkMaterias[3]
}
function checkAuxManteSW() {
  controlarContadorMaterias([0,1,5,6], checkMaterias[4])
  checkMaterias[4] = !checkMaterias[4]
}
function checkAdmManteHW() {
  controlarContadorMaterias([1,5,6,7], checkMaterias[5])
  checkMaterias[5] = !checkMaterias[5]
}
function checkAuxManteHW() {
  controlarContadorMaterias([5,6], checkMaterias[6])
  checkMaterias[6] = !checkMaterias[6]
}

function controlarContadorMaterias(materias, condicion) {
  if ( condicion ) {
    materias.forEach((indice) => { contadorMaterias[indice] -= 1 })
  } else {
    materias.forEach((indice) => { contadorMaterias[indice] += 1 })
  }
}

function isNumber(e) {
  var res = false
  var numero = document.querySelector("#"+e.target.id).value
  const entrada = parseInt(e.charCode)
  if (entrada === 46 || entrada >= 48 && entrada <= 57) {
    // In this point entrada is a Number :D
    console.log(document.querySelectorAll("#"+e.target.id))
    numero = parseInt(numero + e.key)
    if ( isNaN(numero) || numero >= 0 && numero <= 100 ){
      res = true;
    }
  }
  return res;
}

function isNumberKey(e) {
  console.log(e);
}
