// nesessery veriables
random = Math.random();
let adj = "";
let shopName = "";
let otherWord = "";

// selecting the adjective
if (random <= 0.3) {
    adj = adj.concat("Crazy");
} 
else if (random <= 0.6) {
    adj = adj.concat("Fire");
}
else {
    adj = adj.concat("Amazing");
}

// selecting the shop name
random = Math.random();
if (random <= 0.3) {
    shopName = shopName.concat("Foods");
} else if (random <= 0.6) {
    shopName = shopName.concat("Garments");
} else {
    shopName = shopName.concat("Engine");
}

// selecting the other word
random = Math.random();
if (random <= 0.3) {
    otherWord = otherWord.concat("Bros");
}else if (random <= 0.6) {
    otherWord = otherWord.concat("Hub");
}else {
    otherWord = otherWord.concat("Limited");
}
// result
console.log(adj +" "+ shopName +" "+ otherWord);
