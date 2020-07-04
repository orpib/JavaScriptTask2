let digitArray = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let tenArray = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
let hundredArray = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
let othersArray = ['hundred', 'thousand', 'million', 'billion'];
function numberChange() {
    let value = document.getElementById("input").value;
    let inputSize = value.length;
    let result = "";
    if (inputSize >= 13)
        result = "Too big number";
    let inputArray = value.split('');
   //console.log(inputArray);
    if(inputSize < 13)
    for (i = 0; i < inputSize;) {
        if(value[i]=='0'){
            i++;
            continue;
        }
        let temp = value.slice(i);
        if (temp >= 1000000000) { // million bad need change
            let total = inputSize - 9 - i;
            let toSend = value.slice(i, i + total);
            result += hundredToTen(toSend) + " " + othersArray[3] + " "; // 
            i += total;
        }
        else if (temp >= 1000000) {
            //i+something
            let total = inputSize - 6 - i;
            //debugger;
            let toSend = value.slice(i, i + total);
            result += hundredToTen(toSend) + " " + othersArray[2] + " "; //
            i += total;
        }
        else if (temp >= 1000) {
            let total = inputSize - 3 - i;
            let toSend = value.slice(i, i + total);
            result += hundredToTen(toSend) + " " + othersArray[1] + " ";
            i += total;

        }
        else if (temp >= 0) {
            let toSend = value.slice(i);
            result += hundredToTen(toSend) + " ";
            i += 3 ; 
        }
        else
        i++;
        //i++;
        // i +=3
    }

    if(value == "0")
    result += digitArray[0];

    //console.log(result);
    document.getElementById("res").innerHTML= result ;
}
function hundredToTen(value) {// 3 length


    let ret = "";
    if (value.length <= 2)
        ret += ten(value) ;
    else {
        ret += digitArray[value[0]] + " " + othersArray[0] + " ";
        ret += ten(value.slice(1));
    }
    return ret;
}
function ten(value) {// 2 length
    let ret = "";
    if (value.length == 1)
        ret += one(value);
    else {

        if (value[0] != '0') {
            if (value[0] == '1')
                ret += tenArray[value[1]];
            else {
                ret += hundredArray[value[0] - 2];
                if (value[1] != 0)
                    ret += " " + digitArray[value[1]];
            }
        }
        else if (value[1] != '0')
            ret += digitArray[value[1]];
    }

    return ret;
}
function one(value) {
    let ret = "";
    ret += digitArray[value[0]];
    return ret;
}

