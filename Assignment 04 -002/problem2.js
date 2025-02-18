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

