// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   let empty = {}, err = {}, cur = {}, H, Q, D, N, P;
   err.error = "You are rich, my friend! We don't have so much coins for exchange";
 
   if (currency <= 0){
       return empty;
   }

   if (currency > 10000){
       return err;
   }

   if (currency / 50 >=1){
    H = Math.floor(currency / 50);
    cur.H = H;
    currency -= H * 50; 
   }

   if (currency / 25 >=1){
    Q = Math.floor(currency / 25);
    cur.Q = Q;
    currency -= Q * 25; 
   }

   if (currency / 10 >=1){
    D = Math.floor(currency / 10);
    cur.D = D;
    currency -= D * 10; 
   }

   if (currency / 5 >= 1){
    N = Math.floor(currency / 5);
    cur.N = N;
    currency -= N * 5; 
   }

   if (currency >= 1){
    P = currency;
    cur.P = P;
   }

   return cur;
}
