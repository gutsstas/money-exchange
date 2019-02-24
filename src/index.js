// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let newObj = {};
  if (currency == false) return newObj;
  if (currency > 10000) return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
  let obj = {
    'H' : 50,
    'Q' : 25,
    'D' : 10,
    'N' : 5,
    'P' : 1
  };
  for (var key in obj){
    let num = currency/obj[key];
    if (num < 1) continue;
    if(num >= 1){
      let value = Math.trunc(num);
      currency = currency - value*obj[key];
      newObj[key] = value;
      }
    }
    return newObj;
}
