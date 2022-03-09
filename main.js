let somaNota = 0
let total = 0
let numeroNota = 0
let trava = 0
const $button = document.querySelector('button')
const $input = document.querySelector('input')
const $media = document.querySelector('#media')
const $aprovado = document.querySelector('#aprovado')
const $primeirobim = document.querySelector('#primeirobim')
const $segundobim = document.querySelector('#segundobim')
const $terceirobim = document.querySelector('#terceirobim')
const $quartobim = document.querySelector('#quartobim')
$button.addEventListener('click', clickSubmit)

function clickSubmit(event) {
  event.preventDefault()
  let valor = Number($input.value)
  if (valor >= 0 && valor <= 10 && total <= 3) {
    somaNota = somaNota + valor
    valorPorBim(valor, total)
    total++
  }
  if (total == 4 && trava == 0) {
    somaNota = somaNota / 4
    $media.textContent = somaNota.toFixed(1)
    alunoApproved(somaNota)
    trava = 1
  }
}
function valorPorBim(valor, bimestre) {
  if (bimestre == 0) {
    $primeirobim.insertAdjacentHTML('afterbegin', valor)
  } else if (bimestre == 1) {
    $segundobim.insertAdjacentHTML('afterbegin', valor)
  } else if (bimestre == 2) {
    $terceirobim.insertAdjacentHTML('afterbegin', valor)
  } else if (bimestre == 3) {
    $quartobim.insertAdjacentHTML('afterbegin', valor)
  }
}
function alunoApproved(media) {
  if (media >= 6.0) {
    $aprovado.textContent = 'Aluno Aprovado'
  } else {
    $aprovado.textContent = 'Aluno Reprovado'
  }
}
