function exerciseElaboration(p,n){
    n = n*n;
    var aux = 0;
    if (n >= 1){
      while (n > 0) {
        aux += n % 10;
        n = parseInt (n/10);
      }
      return p*100+p;
    } else {
      while (n > 0) {
        aux += aux % 10;
        n = parseInt (n/10);
      }
      return p*10+p;
    }
  }
console.log(exerciseElaboration(5,1)*exerciseElaboration(5,1));
