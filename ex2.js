// 2. Utilize os 3 parâmetros para serem passados na tela:
// a. Valor;
// b. Índice;
// c. Array.

let jogos = ['Red Dead Redemption 2', 'GTA V', 'Dark Souls 3', 'Guitar hero 3', 'Sea of Thieves']

jogos.forEach((jogo, item, array) => {
    console.log(`Nome: ${jogo}`);
    console.log(`ID do jogo: ${item}`);
    console.log(`Lista de jogos: ${array}`);
    });