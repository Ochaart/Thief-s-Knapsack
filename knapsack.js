const pricePerLbs = (lbs, price) => {
  return price / lbs
}

const knapsack = (lbs, goods) => {
  let bestToWorstRatio = [];
  for (let i = 0; i < goods.length; i++) {
    let good = {};
    let ratio = pricePerLbs(goods[i].lbs, goods[i].price);
    good.name = goods[i].name;
    good.ratio = ratio;
    good.lbs = goods[i].lbs;
    good.price = goods[i].price;
    bestToWorstRatio.push(good);
  }
  bestToWorstRatio = bestToWorstRatio.sort((a, b) => (a.ratio < b.ratio) ?  1 : -1)
  let maxProfit = 0;
  for (let i = 0; i < bestToWorstRatio.length; i ++) {
    if (lbs - bestToWorstRatio[i].lbs < 0) {
      continue;
    } else {
      lbs -= bestToWorstRatio[i].lbs;
      maxProfit += bestToWorstRatio[i].price;
    }
  }
  return maxProfit;
}

let listOfGoods = [{name : 'banana', price: 2.00, lbs: 1}, {name : 'diamond', price: 2000.00, lbs: 1}, {name : 'bowling ball', price: 50.00, lbs: 10}, {name : 'cellphone', price: 800.00, lbs: 5}]

console.log(knapsack(10, listOfGoods));
