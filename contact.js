orderCheck = document.getElementById('order-check')
nightQty = document.getElementById('night-qty')
nightPrice = document.getElementById('night-price')
traumaQty = document.getElementById('trauma-qty')
traumaPrice = document.getElementById('trauma-price')
orderWrap = document.getElementsByClassName('order-wrap')[0]

orderCheck.addEventListener("click", hideOrder);

function hideOrder() {
    if (orderWrap.classList.contains('hide')) {
        console.log('Hi')

        orderWrap.classList.remove('hide')
    } else {
        console.log('yes')
        orderWrap.classList.add('hide')
    }
}

if (orderCheck) {
    console.log(orderCheck)
}

nightQty.addEventListener('input', findNightPrice);

function round(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function findNightPrice(){

    const MOQ = 4
    const priceLimit = 500
    const minPrice = 26

    if (nightQty.value){
        if (nightQty.value < MOQ){
            nightPrice.innerText = 'Night Splint: Minimum order of 4 units'
        } else if (nightQty.value < priceLimit){
            unitPrice = round(44-2.89*Math.log(parseInt(nightQty.value)))
            totalPrice = round(nightQty.value*unitPrice)
            nightPrice.innerText = `Unit Price: £${unitPrice}\nTotal Price: £${totalPrice}`
        } else if (nightQty.value >= priceLimit){
            totalPrice = round(nightQty.value*minPrice)
            
            nightPrice.innerText = `Unit price: £26.00\nTotal Price: £${totalPrice}`
        }    
    }
}

traumaQty.addEventListener('input', findTraumaPrice);


function findTraumaPrice(){

    const MOQ = 20
    const priceLimit = 1800
    const minPrice = 12

    if (traumaQty.value){
        if (traumaQty.value < MOQ)
        {
            traumaPrice.innerText = 'Minimum order of 20 units'
        } else if (traumaQty.value % MOQ !== 0){
            traumaPrice.innerText = 'Only available in boxes of 20'
        }
        else if (traumaQty.value < priceLimit)
        {
            unitPrice = round(28.3-1.44*Math.log(parseInt(traumaQty.value)))
            totalPrice = round(traumaQty.value*unitPrice)
            traumaPrice.innerText = `Unit Price: £${unitPrice}\nTotal Price: £${totalPrice}`
        } 
        else if (traumaQty.value >= priceLimit)
        {
            totalPrice = round(traumaQty.value*minPrice)
            traumaPrice.innerText = `Unit price: £12.50\nTotal Price: £${totalPrice}`
        }    
    }
}
