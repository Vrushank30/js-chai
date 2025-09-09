const defenders = ["cubarsi","inigo","kounde","balde"]
const midfielders = ["pedri","dejong","casado","olmo"]
//defenders.push(midfielders);
// console.log(defenders);
// o/p:
// [
//   'cubarsi',
//   'inigo',
//   'kounde',
//   'balde',
//   [ 'pedri', 'dejong', 'casado', 'olmo' ]
// ]
// const players = defenders.concat(midfielders);
// console.log(players);

//concat spread operator
const unt = [...defenders,...midfielders];
// console.log(unt);

