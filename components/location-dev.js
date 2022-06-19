let toUS = ['United States','Canada','Mexico']

let US_URL = 'https://www.amazon.com/dp/B09N5KH4F3?ref=myi_title_dp'

fetch('https://extreme-ip-lookup.com/json/?key=mRicTdUafjFRd3Ufqftq')

.then( res => res.json())
.then(response => {
    console.log("Country: ", response.country);
    try {
        if (window.location.href.indexOf("night-splint") > -1) {
            if (toUS.includes(response.country)){
                let link = document.getElementById('order-night-product')
                link.setAttribute("href", US_URL);
            } else {
            }
        } else {
            if (!toUS.includes(response.country)){
                let link = document.getElementById('order-night-home')
                link.setAttribute("href", UK_URL);
            }
        }
        
    } catch (error) {
        // console.log(error)
    }

 })
 .catch((data, status) => {
    // console.log('Request failed');
 })



