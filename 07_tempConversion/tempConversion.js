const ftoc = function(temp) {

let tempBox = temp;

let convertedTemBox; 

if (tempBox || tempBox === 0){
  convertedTemBox = (tempBox - 32) * 0.5556 ; 
  convertedTemBox = Math.round(convertedTemBox * 10)/10 ;
  return convertedTemBox;
}



};

const ctof = function(temp) {

  let tempBox = temp;

  let convertedTemBox; 
  


  if (tempBox || tempBox === 0){
    convertedTemBox = (tempBox * 1.8) + 32; 
    convertedTemBox = Math.round(convertedTemBox * 10)/10 ;
    return convertedTemBox;
  }
  
  

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
