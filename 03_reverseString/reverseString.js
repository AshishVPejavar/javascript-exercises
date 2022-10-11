const reverseString = function(text) {

    let textBox = text;
    

    if (textBox){
    let reverseTextBox = "";
        for(let a = textBox.length; a >= 0 ; a-- ){
            if(reverseTextBox == "undefined"){
                reverseTextBox = textBox[a];
            } else {
                reverseTextBox += textBox[a];
            }
           
             
             
            }
    return reverseTextBox; 
    }
    
    else {return "";}

   
    }
;

// Do not edit below this line
module.exports = reverseString;
