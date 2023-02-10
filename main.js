const alunos = [
    {
        "nome": "aluno1",
        "nota": "1"
    },
    {
        "nome": "aluno2",
        "nota": "2"
    },
    {
        "nome": "aluno3",
        "nota": "3"
    },
    {
        "nome": "aluno4",
        "nota": "4"
    },
    {
        "nome": "aluno5",
        "nota": "5"
    },
    {
        "nome": "aluno6",
        "nota": "6"
    },
    {
        "nome": "aluno7",
        "nota": "7"
    }
]

console.log(alunos)

alunosAprovados = alunos.filter(function (a) {
    return a.nota >= 6
})

console.log(alunosAprovados)