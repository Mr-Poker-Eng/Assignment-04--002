function calculateVAT(price){
    if(typeof price !== "number" || price <= 0){
        return "Invalid";
    }
    const vat = (price * 7.5) / 100;
    return vat;
}



function validContact(contact){
    if(typeof contact !== "string"){
        return "Invalid";
    }
    if(contact.length === 11 && contact.startsWith("01") && !contact.includes(" ")){
        return true;
    }
    else{
        return false;
    }
}



function willSuccess(marks) {
    if(!Array.isArray(marks)){
        return "Invalid";
    }
  let pass = 0;
  let fail = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      pass++;
    } else {
      fail++;
    }
  }
  if (pass > fail) {
    return true;
  } else {
    return false;
  }
}



function  validProposal( person1 , person2 ) {
    if(typeof person1 !== "object" || typeof person2 !== "object"){
        return "Invalid";
    }

    if(person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7){
        return true;
    }
    else{
        return false;
    }
}



function calculateSleepTime(times) {
    let totalSec = 0;
    for (let i = 0; i < times.length; i++) {
      if(typeof times[i] !== "number"){
          return "Invalid";
      }
      totalSec = times[i] + totalSec;
    }
    let hour = Math.floor(totalSec / 3600);
    let minute = Math.floor((totalSec % 3600) / 60);
    let second = Math.floor((totalSec % 3600) - (minute * 60));
    const time = { hour: hour, minute: minute, second: second };
  
    return time;
  }

  