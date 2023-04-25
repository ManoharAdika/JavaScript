let number = 123456789;

let reverse = 0;

while(number>0){
    
    remainder = number%10;//9
    
    reverse= reverse*10 + remainder;

    number=Math.floor(number/10);

}
console.log("Reversed number is : " + reverse);