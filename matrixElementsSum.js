<script>
//var matriz=[[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]];
var matriz=[[0, 1, 1, 2], [0, 5, 0, 0],[2, 0, 3, 3]];
var aux = 0;
for (var i = 0; i < matriz.length; i++) {
  for (var j = 0; j < matriz[i].length; j++) {
      if(matriz[i][j]!=0){
        if(i==0){
          aux=aux+matriz[i][j];
        } else {
          if(matriz[i-1][j-1]!=0){
            aux=aux+matriz[i][j];
          }
        }
      }
  }
}
alert(aux);
</script>
