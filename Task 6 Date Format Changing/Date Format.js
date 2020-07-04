function dateChange() {
    let value = document.getElementById("input").value;
    let dayTime = value.search(/am/i);
    let nightTime = value.search(/pm/i);
    let result = "";
    // critical case 12 am greater than 24
    let valid = validityCheck(value);
    if (valid) {
        if (dayTime != -1) {
            let hour = parseInt(value.slice(0, 2));
            if (hour == 12)
                result = "00";
            else
                result += ('0') + (hour);

            result += value.slice(2, dayTime);
        }
        else if (nightTime != -1) {
            let hour = parseInt(value.slice(0, 2));
            hour += 12;
            result = hour + value.slice(2, nightTime);
        } // converted into 24 hout format
        else {
            let hour = parseInt(value.slice(0, 2));
            if (hour < 12) {
                result = (hour == 0 ? "12" : hour) + value.slice(2) + " AM";

            }
            else if (hour < 24) {
                result = (hour == 12 ? "12" : hour - 12) + value.slice(2) + " PM";
            }
            else
                result = "00" + value.slice(2) + " AM";

        }
    }
    else {
        result = "Invalid Input";
    }
    console.log(result);
    document.getElementById("res").innerHTML = result;
}

function validityCheck(value) {
    let ret = true;
    let minutes = value.slice(3, 5);
    let seconds = value.slice(6, 8);
    let hour = value.slice(0, 2);
    //debugger
    if (minutes > 59 || seconds > 59)
        ret = false;
    if (hour == 24 && (minutes > 0 || seconds > 0))
        ret = false;
    if (hour > 24)
        ret = false;
    return ret;
}
