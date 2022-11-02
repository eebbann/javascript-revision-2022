var friends = [];

friends[0] = 'one';
friends[1] = "two";
friends["hen"] =	"three" //this will not work in json strigify ie/; wi

var m = JSON.parse(JSON.stringify(friends))
console.log(friends)
console.log(m)