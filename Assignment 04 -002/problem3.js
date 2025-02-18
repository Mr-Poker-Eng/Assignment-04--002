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

