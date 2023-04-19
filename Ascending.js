
  
let a = 4000;
let b = 5000;
let c = 200;

  if(a<b && b<c){
    console.log(a,b,c)
}
else if(a<c && c<b){
    console.log(a,c,b)
}
else if(b<c && c<a){
    console.log(b,c,a)
}
else if(b<a && a<c){
    console.log(b,a,c)
}
else if(c<b && b<a){
    console.log(c,b,a)
}
else if(c<a && a<b ){
    console.log(c,a,b)
}