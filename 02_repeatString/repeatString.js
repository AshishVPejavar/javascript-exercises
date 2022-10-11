const repeatString = function( hey , num ) {
 
 let result = null;  
 let heyBox = hey.toString();

 let numbox = parseInt(num);

if (heyBox) {
    if (numbox < 0) {return 'ERROR';}
    else if (numbox == 0 ) {return '';}
    else {
       for (let a = 1; a <= numbox ; a++){
        result = result + heyBox;
       }
       
       result = result.slice(4, result.lenght);
       return result ; 
    }

} else {
    return '';
}
/*
for ( let i = 0 ; i <= numbox ; i++) { 
   result += heyBox ; 
}
result += "'" + result + "'"; 
*/

};

module.exports = repeatString; 

// Do not edit below this line
module.exports = repeatString;
