let num_km = document.getElementById('km').value;
let km_price = num_km * 0.21;
console.log(km_price)

let age = document.getElementById('age').value;
console.log(age)

let final_price = km_price

if (age < 18) {
    let discount = km_price * 0.2
    final_price = km_price - discount
}

else if (age > 65) {
    let discount = km_price * 0.4
    final_price = km_price - discount
}
