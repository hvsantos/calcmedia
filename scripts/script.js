function alunoNota(nota1, nota2, nota3, nota4) {
  let notaSomada = nota1 + nota2 + nota3 + nota4
  let mediaNota = notaSomada / 4
  mediaNota = mediaNota.toFixed(1)
  return mediaNota
}
function alunoApproved(media) {
  if (media >= 6.0) {
    return 'Aluno Aprovado'
  } else {
    return 'Aluno Reprovado'
  }
}

let n1 = 0
let n2 = 23.6
let n3 = 0
let n4 = 0
let media = alunoNota(n1, n2, n3, n4)
console.log(media)
let approve = alunoApproved(media)
console.log(approve)
