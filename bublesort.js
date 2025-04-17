let numeros = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7]; //array

for (let i=0; i<numeros.length; i++) //loop para verificar se estao no lugar certo
     {
    for (let j=0; j<numeros.length - 1; j++) //loop para comparar o prox numero um por um, -1 por conta q compara
    //numero atual com o proximo
    {
        if (numeros[j]>numeros[j+1]) //verificador se o numero atual é maior que o proximo, se for faz a troca
        {
            let temp = numeros[j];
            numeros[j] = numeros [j+1];
            numeros [j+1] =temp;// as 3 linhas faz a troca entre 2 numeros e guarda o primeiro numa var temporaria
            //  e dps faz a troca
        }
    }
} 
console.log(numeros); //roda a lista na ordem

// i< .... o loop vai rodar enquanto i for menor q o tamanho da lista

//i++ aumenta o valor de i em 1 a cada volta ate chegar no numero da array
