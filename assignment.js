const whichSchool  = function (age) {
  if (age < 13) {
  return "Elementary School";
} else if (age <= 18) {
  return "High School";
} else if (age <= 100) { 
  return "Lighthouse Labs";
}
}

console.log(whichSchool(27))
