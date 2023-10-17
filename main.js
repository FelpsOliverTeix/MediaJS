function inserirDados() {
    let nomeAluno = prompt('Digite o nome do aluno:');
    let nota1 = Number(prompt('Digite a primeira nota do aluno:'));
    let nota2 = Number(prompt('Digite a segunda nota do aluno:'));
    let nota3 = Number(prompt('Digite a nota de trabalho do aluno:'));
    let soma = nota1 + nota2 + nota3;
    document.getElementById('nomeAluno').innerHTML = nomeAluno;
    document.getElementById('primeiraNota').innerHTML = nota1 + ' de 10 ';
    document.getElementById('segundaNota').innerHTML = nota2 + ' de 10 ';
    document.getElementById('terceiraNota').innerHTML = nota3 + ' de 10 ';
    document.getElementById('total').innerHTML = soma;

    if (soma < 10) {
        document.getElementById('situacaoAluno').innerHTML = "REPROVADO. Sua nota foi abaixo da média, favor estudar mais!";
    } else if (soma < 30) {
        document.getElementById('situacaoAluno').innerHTML = "APROVADO. Boa nota! Continue estudando!";
    } else {
        document.getElementById('situacaoAluno').innerHTML = "APROVADO. Parabéns! Você é um exemplo de aluno!";
    }
}





