console.log("=== Array ===");
var array = ["Geruso", "Icaro", "Thiago"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log("=== Laços de repetição ===");
console.log("--- While  ----");
var auxW = 0;
while (auxW < array.length) {
  console.log(array[auxW]);
  auxW++;
}

console.log("--- Do While ---");
auxD = 0;
do {
  console.log(array[auxD]);
  auxD++;
} while (auxD < array.length);

console.log("--- For ---");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
