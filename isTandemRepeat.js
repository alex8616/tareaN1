function isTandemRepeat(a){
  var x=parseInt(a.length/2,10);
    if(a.length%2==0 && a.length>0){
      for(var i=0;i<x;i++){
        if(a[i]!=a[i+x])return false;
      }
      return true;
    }
    else{
      return false;
    }
}
console.log(isTandemRepeat(a="qqq"));
