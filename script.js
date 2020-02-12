var slaying = true;
var youHit = Math.random();
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying){
if (youHit) {
console.log("You hit the dragon and did " + damageThisRound + " damage!");
totalDamage += damageThisRound;
if (totalDamage >= 5){
console.log("You win!");
slaying = false;
} else {
youHit = Math.floor(Math.random() * 2);
}
} else {
console.log("The dragon killed you");
slaying = false;
}
}