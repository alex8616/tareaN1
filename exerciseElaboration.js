function exerciseElaboration(p,n){
    var cad = p;
    for (var i = 0; i < n; i++) {
          cad = cad + '0';
          cad = cad + p;
          return cad;
    }
}
console.log(exerciseElaboration(1,2));
