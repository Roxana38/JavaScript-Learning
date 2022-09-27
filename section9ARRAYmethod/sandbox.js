//const score=[10, 30, 15, 25, 50, 40, 5];


//71.Filter method

/*const filterScore=score.filter((score) => {
    return score > 20;
})
console.log(filterScore);*/

/*const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];

  const primiumUsers = users.filter(user => user.premium)
  console.log(primiumUsers);*/

  // 72.Map method
  //const prices = [20, 10, 30, 25, 15, 40, 80, 5];

/*const salePrices = prices.map((price)=>{
    return price / 2;*/
/*const salePrices = prices.map(price => price / 2);
console.log(salePrices);*/


/*const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

const saleProducts = products.map(product => {
    if(product.price>30){
        return {name: product.name, price: product.price /2};
    }else{
        return product;
    }
});

console.log(saleProducts,products);
*/

//73.Reduce Method

//const scores = [10, 20, 60, 40, 70, 90, 30];

/*const result =scores.reduce((acc,curr) => {
    if(curr > 50){
        acc++;
     }
    return acc;
},0);
 console.log(result);*/

 /*const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
  ];

  const marioTotal = scores.reduce((acc,curr)=>{
     if(curr.player === 'mario'){
        acc+= curr.score;
     }
     return acc
  },0);
  console.log(marioTotal);*/

  //74.Find Method (return the value of the first element inside an array yhat passing a certain test in a callback function)

  /*const scores = [10, 5, 0, 40, 60, 10, 20, 70];

  const firstHightScore = scores.find(score => score > 50);
        console.log(firstHightScore);
        */

// 75.Sort Method

// example 1 - sorting strings

/*const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
name.reverse();
console.log(names);*/

// example 2 - sorting numbers (sorting the first number)

//const scores = [10, 50, 20, 5, 35, 70, 45];
/*scores.sort();
scores.reverse();
console.log(scores);*/

/*.sort((a,b)=> b - a);
console.log(scores);*/

// example 3 - sorting objects

/*const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
  ];
/* players.sort((a,b)=>{
    if (a.score > b.score){
        return -1;
    }else if(b.score>a.score){
        return 1
    }else{
        return 0;
    }
     });*/
/*players.sort((a,b)=>b.score-a.score)

     console.log(players);*/

//76.  Chaining Array Methods

/*const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];

 /*const filtered=products.filter(product =>product.price > 20)
 
  const promos = filtered.map(product => {
    return `the ${product.name} is ${product.price/2} pounds`
  });

  console.log(promos);*/

 /* const promos = products
  .filter(product  => product.price >20)
  .map(product =>`the ${product.name} is ${product.price/2} pounds`)

  console.log(promos);*/