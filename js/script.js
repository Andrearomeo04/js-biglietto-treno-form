const btn = document.getElementById('calculate_price')
btn.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let num_km = document.getElementById('km').value;
    let km_price = num_km * 0.21;


    let age = document.getElementById('age').value;

    let final_price = km_price;

    if (age < 18) {
        let discount = km_price * 0.2;
        final_price = km_price - discount;
    }
    
    else if (age > 65) {
        let discount = km_price * 0.4;
        final_price = km_price - discount;
    }

    let price = final_price.toFixed(2);

    let offert = 'Economy'
    const carriage = Math.floor(Math.random() * 10) + 1;
    const cp_code = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

    document.getElementById('ticket_name').innerHTML = name;
    document.getElementById('ticket_offert').innerHTML = offert;
    document.getElementById('ticket_carriage').innerHTML = carriage;
    document.getElementById('ticket_cp').innerHTML = cp_code;
    document.getElementById('ticket_price').innerHTML = price;
    


    // console.log(num_km, age, price);
    

})