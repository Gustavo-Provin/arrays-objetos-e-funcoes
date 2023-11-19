const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

// 1. Imprima no console a quantidade de pessoas Total.
console.log(data.length);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
let pessoasF = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].sexo === 'F') {
    pessoasF++;
  }
}
console.log(pessoasF);

// 3. Imprima no console a soma do salário de todas as pessoas.
let soma = 0;
for (let i = 0; i < data.length; i++) {
  soma += data[i].salario;
}
console.log(soma);

// 4. Imprima no console a média do salário de todas as pessoas.
let media = soma / 7;
console.log(media.toFixed(2));

// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
let somaSexoM = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].sexo === 'M') {
    somaSexoM += data[i].salario;
  }
}
console.log(somaSexoM.toFixed(2));

// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
let mediaM = somaSexoM / 3;
console.log(mediaM.toFixed(2));

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
let salarioMaior = data.some((pessoa) => pessoa.salario > 7000);
console.log(salarioMaior);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
let cadeEva = data.findIndex((pessoa) => pessoa.nome === 'Eva Trindade');
console.log(cadeEva);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
let cadeSilva = data.filter((pessoa) => pessoa.nome.indexOf('Silva') !== -1);
for (let i = 0; i < cadeSilva.length; i++) {
    console.log(cadeSilva[i].nome);
}


// 10. Imprima os nomes utilizando o MAP
let nomes = data.map((pessoa) => pessoa.nome);
console.log(nomes);