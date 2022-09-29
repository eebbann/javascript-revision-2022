function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  ///return userDate.replace("/", " ")
  return userDate.split("/").reverse().join("").toS
}
 
console.log(formatDate("12/31/2014"))