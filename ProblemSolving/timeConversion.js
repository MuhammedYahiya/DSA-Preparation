function timeConversion(timeIn12HR){
    let hour = Number(timeIn12HR.slice(0,2))
    let am_pm = timeIn12HR.slice(8)
    let rest = timeIn12HR.slice(2,8)
    if (am_pm === "AM" && hour === 12){
        hour = 0;
    } else if(am_pm === "PM" && hour !== 12){
        hour += 12
    }

    let hourStr = ('0' + hour).slice(-2);
    let timeIn24HR = hourStr + rest
    return timeIn24HR
}


let timeIn12HR = '12:01:00PM'
console.log(timeConversion(timeIn12HR));
 