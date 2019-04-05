function siglo(a){
    var aux=0;
    if(a>1&&a<100){aux = "siglo 1";}
    if(a>101&&a<200){aux = "siglo 2";}
    if(a>201&&a<300){aux = "siglo 3";}
    if(a>301&&a<400){aux = "siglo 4";}
    if(a>401&&a<500){aux = "siglo 5";}
    if(a>501&&a<600){aux = "siglo 6";}
    if(a>601&&a<700){aux = "siglo 7";}
    if(a>701&&a<800){aux = "siglo 8";}
    if(a>801&&a<900){aux = "siglo 9";}
    if(a>901&&a<1000){aux = "siglo 10";}
    if(a>1001&&a<1100){aux = "siglo 11";}
    if(a>1101&&a<1200){aux = "siglo 12";}
    if(a>1201&&a<1300){aux = "siglo 13";}
    if(a>1301&&a<1400){aux = "siglo 14";}
    if(a>1401&&a<1500){aux = "siglo 15";}
    if(a>1501&&a<1600){aux = "siglo 16";}
    if(a>1601&&a<1700){aux = "siglo 17";}
    if(a>1701&&a<1800){aux = "siglo 18";}
    if(a>1801&&a<1900){aux = "siglo 19";}
    if(a>1901&&a<2000){aux = "siglo 20";}
    if(a>2001&&a<2100){aux = "siglo 21";}
    return aux;
}
  console.log(siglo(1905));
