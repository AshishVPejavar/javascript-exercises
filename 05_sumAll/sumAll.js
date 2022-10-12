const sumAll = function(num1, num2 ) {

let num1box = num1;
let num2box = num2;

let numTotal = 0; 


if (Number.isInteger(num1box) && Number.isInteger(num2box)){
    if(num1box > 0 && num2box > 0){
        if (num1box < num2box){
            for ( let a = num1box ; a <= num2box ; a++){
                numTotal += a;
            }
        }
        else {
            for ( let a = num2box ; a <= num1box ; a++){
                numTotal += a;
            }
        }
    } else {return 'ERROR';}
}else {return 'ERROR';}


/*
if(num1 > 0 && num2 > 0){
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        if (num1 < num2){
            for( let a = num1 ; a <= num2 ; a++){
                if (numTotal === "undefined"){numTotal = a;}
                else {numTotal += a; }
            }
        }
        else{
            for( let a = num2 ; a <= num1 ; a--){
                if (numTotal === "undefined"){numTotal = a;}
                else {numTotal += a; }
            }
        }
    } else {return "ERROR";}
} else {return "ERROR";}
*/

return numTotal; 
};

// Do not edit below this line
module.exports = sumAll;
