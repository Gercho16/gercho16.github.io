var contadorMaterias = [0, 0, 0, 0, 0, 0, 0, 0];
var checkMaterias = [false, false, false, false, false, false];
var seleccionarItems = document.querySelector('#seleccionar-items');

function checkMateriasMante() {
  checkAdmManteSW()
  checkAuxManteSW()
  checkAdmManteHW()
  checkAuxManteHW()
  colocarEntradasNotas()
}

function checkMateriasDesa() {
  checkAdmDesa()
  checkAuxDesa()
  colocarEntradasNotas()
}

function checkAdmComputo() {
  controlarContadorMaterias([0,1,2,5,7], checkMaterias[0])
  checkMaterias[0] = !checkMaterias[0]
  colocarEntradasNotas()
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


function colocarEntradasNotas() {
  var res = ""

  if (contadorMaterias[0] > 0 ) {
    res = res + `<div class="nota">
      <label for="meritos">Meritos🎓: </label>
      <input type="text" id="nota-meritos" name="meritos" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[0] > 0 ) {
    res = res + `<div class="nota">
      <label for="linux">Linux🐧: </label>
      <input type="text" id="nota-linux" name="linux" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[1] > 0 ) {
    res = res + `<div class="nota" >
      <label for="redes">Redes nivel intermedio📡: </label>
      <input type="text" id="nota-redes" name="redes" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[2] > 0 ) {
    res = res + `<div class="nota">
      <label for="base"> Base de datos💾: </label>
      <input type="text" id="nota-base" name="base" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[3] > 0 ) {
    res = res + `<div class="nota">
      <label for="progra"> programacion por internet💻: </label>
      <input type="text" id="nota-progra" name="progra" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[4] > 0 ) {
    res = res + `<div class="nota">
      <label for="uml">Modelado aplicaciones web🎴: </label>
      <input type="text" id="nota-uml" name="uml" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[5] > 0 ) {
    res = res + `<div class="nota">
      <label for="ensamblaje"> Ensamblaje y mantenimiento⚙: </label>
      <input type="text" id="nota-ensamblaje" name="ensamblaje" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[6] > 0 ) {
    res = res + `<div class="nota">
      <label for="electronicaT"> Electronica (TEORICO)📖: </label>
      <input type="text" id="nota-electronicaT" name="electronicaT" value="" maxlength="5" oninput="return isNumber(event)">
    </div>
    <div class="nota">
      <label for="electronicaP">Electronica (PRACTICO)🔧: </label>
      <input type="text" id="nota-electronicaP" name="electronicaP" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[7] > 0 ) {
    res = res + `<div class="nota">
      <label for="didactica">Didactica👩‍🏫: </label>
      <input type="text" id="nota-didactica" name="didactica" value="" maxlength="5" oninput="return isNumber(event)">
    </div>`
  }
  if (contadorMaterias[0] === 0 && contadorMaterias[1] === 0 && contadorMaterias[2] === 0 && contadorMaterias[3] === 0 && contadorMaterias[4] === 0 && contadorMaterias[5] === 0 && contadorMaterias[6] === 0 ) {
    res = `<p class="text-danger">Seleccione al menos un laboratorio</p>`
  }
  document.querySelector('.notas').innerHTML = res;
}

function calcular() {
  const checkCompu = document.querySelector('.check-compu').checked
  const checkMante = document.querySelector('.check-mante').checked
  const checkDesa = document.querySelector('.check-desa').checked
  let res = ""
  if (checkCompu || checkMante || checkDesa) {
    if ( contadorMaterias[0] > 0 ) {
       var me = convertNumber(document.querySelector('#nota-meritos').value)
       var linux = convertNumber(document.querySelector('#nota-linux').value)
    }
    if ( contadorMaterias[1] > 0 ) {
       var redes = convertNumber(document.querySelector('#nota-redes').value)
    }
    if ( contadorMaterias[2] > 0 ) {
       var base = convertNumber(document.querySelector('#nota-base').value)
    }
    if ( contadorMaterias[3] > 0 ) {
       var web = convertNumber(document.querySelector('#nota-progra').value)
    }
    if ( contadorMaterias[4] > 0 ) {
       var uml = convertNumber(document.querySelector('#nota-uml').value)
    }
    if ( contadorMaterias[5] > 0 ) {
       var ensamblaje = convertNumber(document.querySelector('#nota-ensamblaje').value)
    }
    if ( contadorMaterias[6] > 0 ) {
       var electronicaT = convertNumber(document.querySelector('#nota-electronicaT').value)
       var electronicaP = convertNumber(document.querySelector('#nota-electronicaP').value)
    }
    if ( contadorMaterias[7] > 0 ) {
      var didactica = convertNumber(document.querySelector('#nota-didactica').value)
    }
    if( checkCompu ) {
      const notaCompu = (me)*.2 + ( (linux*.25) + (redes*.25) + (base*.20) + (ensamblaje*.20) + (didactica*.1) )*.8
      res = res + createListItem('Administrador de computo:', 'compu', notaCompu)
    }
    if( checkMante ) {
      const notaAdmSW = (me)*.2 + ( (linux*.10) + (redes*.10) + (ensamblaje*.25) + (electronicaT*.20) + (electronicaP*.25) + (didactica*.10) )*.8
      res = res + createListItem('Administrador de Software:', 'mante', notaAdmSW)
      const notaAdmHW = (me)*.2 + ( (redes*.10) + (ensamblaje*.30) + (electronicaT*.25) + (electronicaP*.20) + (didactica*.10) )*.8
      res = res + createListItem('Administrador de Hardware:', 'mante', notaAdmHW)
      const notaAuxSW = (me)*.2 + ( (linux*.10) + (redes*.10) + (ensamblaje*.25) + (electronicaT*.30) + (electronicaP*.25) )*.8
      res = res + createListItem('Auxiliar de Software:', 'mante', notaAuxSW)
      const notaAuxHW = (me)*.2 + ( (ensamblaje*.35) + (electronicaT*.30) + (electronicaP*.35) )*.8
      res = res + createListItem('Auxiliar de Hardware:', 'mante', notaAuxHW)
    }
    if( checkDesa ) {
      const notaAdmDesa = (me)*.2 + ( (linux*.1) + (base*.3) + (web*.3) + (uml*.2) + (didactica*.1) )*.8
      res = res + createListItem('Administrador de Desarrollo:', 'desa', notaAdmDesa)
      const notaAuxDesa = (me)*.2 + ( (linux*.1) + (base*.3) + (web*.3) + (uml*.3) )*.8
      res = res + createListItem('Auxiliar de Desarrollo:', 'desa', notaAuxDesa)
    }
    document.querySelector('.modal-body').innerHTML = `<ul>
      ${res}
    </ul>`;
    window.location.href = '#modal-one'
  } else {
    alert('❌Marque alguna de las casillas')
  }
}

function convertNumber(number) {
  number = parseFloat(number);
  if ( isNaN(number) ){
    number = 0;
  }
  return number
}

function createListItem(cargo, clase, nota) {
  return `<li class="${clase}">
    ${cargo}: ${nota.toFixed(2)}
  </li>`
}

function isNumber(e) {
  var res = true
  var numero = document.querySelector("#"+e.target.id).value
  const entrada = e.data
  if (entrada === "." || parseInt(entrada) >= 0 && parseInt(entrada) <= 9) {
    // In this point entrada is a Number :D
    if ( parseInt(numero) >= 0 && parseInt(numero) <= 100 ){
      res = false;
    }
  }
  if (res && e.inputType !== "deleteContentBackward") {
    numero = numero.substring(0, numero.length - 1)
    document.querySelector("#"+e.target.id).value = numero
  }
  return res;
}

if (navigator.userAgent.match(/Android/i)) {
  // alert('hola')
  // document.querySelector('#nota-meritos').type = 'number'
}
