// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let newCurrency= {};
    let coins=['50','25','10','5','1'];
    let keys=['H','Q','D','N','P'];    
    let errorOfChanging ={error: "You are rich, my friend! We don't have so much coins for exchange"};

    if(currency<1) {
      return  newCurrency;
     }   

    if (currency<10000) {      
      for (let i =0; i < coins.length; i++) {      
        for (let j = i; j < keys.length; j++) {      
          if (getCoin(coins[i],currency)>=1) {
              newCurrency[keys[i]]=getCoin(coins[i],currency);
            }
       currency=currency%coins[i];        
        i++; 
        }    
      return  newCurrency;   
      }      
  } else {
    return errorOfChanging;
  }
  return newCurrency;
  }

    function getCoin(coin,money){
      return  Math.floor(money/parseInt(coin));
    }

    // let H='50';
    // let Q='25';
    // let D='10';
    // let N='5';
    // let P='1';
    // let numberOfCoin=0;
    //  if (currency>=parseInt(H)) {
    //       numberOfCoin=currency/parseInt(H);
    //       newCurrency['H']=Math.floor(numberOfCoin);
    //       currency = currency%parseInt(H);
    //      if (currency==0) {
    //       return newCurrency;
    //      }
    //      }

    //       if (currency>=parseInt(Q)) {
    //         numberOfCoin=currency/parseInt(Q);
    //           newCurrency['Q']=Math.floor(numberOfCoin);
    //           currency= currency%parseInt(Q);
    //          if (currency==0) {
    //            return newCurrency;
    //           }

    //       }
    //      if (currency>=parseInt(D)) {
    //          numberOfCoin=currency/parseInt(D);
    //          newCurrency['D']=Math.floor(numberOfCoin);
    //          currency= currency%parseInt(D);
    //          if (currency==0) {
    //            return newCurrency;
    //           }

    //       }
    //      if (currency>=parseInt(N)) {
    //           numberOfCoin=currency/parseInt(N);
    //           newCurrency['N'] = Math.floor(numberOfCoin);
    //           currency= currency%parseInt(N);
    //          if (currency==0) {
    //            return newCurrency;
    //           }

    //       }
    //      if (currency>=parseInt(P)) {
    //            numberOfCoin=Math.floor(currency);
    //            newCurrency['P']=numberOfCoin;
    //            if (currency<1) {
    //                 return newCurrency;
    //                }

    //           }
 


