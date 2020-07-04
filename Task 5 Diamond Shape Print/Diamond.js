function printShape(){
    let inputSize = document.getElementById("input").value;
    let textToShow = "<pre>";
    let spaceSize = inputSize * 2 -1;
    let len = spaceSize;
    for(let i=1; i<= len ; i++){
        let currentSpace = spaceSize % inputSize ; // 
        let space="" ;
        for(let j=0 ; j< currentSpace ; j++){
        space +=" ";
        textToShow += " ";
        }
        
        let text="" ;
        for(let j=1; j<= (len - (currentSpace*2)) ; j++){
            text += "*";
            //console.log("*");    
            textToShow += "*";
        }
        console.log(space+text);
        textToShow +="<br>";
        if(i < inputSize)
        spaceSize--;
        else
        spaceSize++;
        
    }
    textToShow += "</pre>";
   // console.log(textToShow);
    document.getElementById("res").innerHTML = textToShow;
}