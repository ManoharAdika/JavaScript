// 1 to 10

/* let i = 1;
while (i < 10) {
  console.log(i)
  i++;
} */



//  print10 to 1
 
/* let a = 10;

while(a>1){
  console.log(a)
  a--;
} */

// 1 to 10 even numbers

/* let i=0;

while(i<=10){
  
  if (i%2==0){
    console.log(i)
  }
  i =i+1;
}
 */

// 1 to 10 odd

/* let f = 1;

while(f<=100){
  console.log(f)
  f = f+2
} */


// multiples of table 14


/* let a = 14;

let b = 1;

while(b<=10){
  console.log(a +"*"+b +"=" + a*b)
   b++;
}
 */


// multiples of table 14

/* let i = 4;
let k = 11;

while(k<=20){
  console.log(4+"*"+k+"="+i*k)
  k++
} */


// factors of 4

var a = 24;
var b = [];

for(i=0;i<=a;i++){
  if(a%i==0){
    b.push(i)
  }
  
}
console.log(b)