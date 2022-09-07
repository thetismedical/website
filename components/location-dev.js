let toUS = ['United States','Canada','Mexico']

let US_URL = 'https://www.amazon.com/dp/B09N5KH4F3?ref=myi_title_dp'

const urls = {
    US_home: 'https://www.amazon.com/dp/B09N5MVY1Q?maas=maas_adg_75CEE5FF68E8B03C603B001959199F40_afap_abs&ref_=aa_maas&tag=maas&ref=myi_title_dp&th=1',
    US_product: 'https://www.amazon.com/dp/B09N5MVY1Q?maas=maas_adg_CDB334A832298E5FAEF6F3F7FB3B9DC7_afap_abs&ref_=aa_maas&tag=maas&ref=myi_title_dp&th=1',
}

fetch('https://extreme-ip-lookup.com/json/?key=mRicTdUafjFRd3Ufqftq')
.then( res => res.json())
.then(response => {
    console.log("Country: ", response.country);
    try {
        // Check if on Night Splint Page
        if (window.location.href.indexOf("night-splint") > -1) {
            console.log("product")
            if (toUS.includes(response.country)){
                let product_link = document.getElementById('order-night-product')
                product_link.setAttribute("href", urls.US_product);
            }
        // If not on Night Splint Page
        } else {
            if (!toUS.includes(response.country)){
                console.log("home")
                let link = document.getElementById('order-night-home')
                link.setAttribute("href", urls.US_home);
            }
        }
        
    } catch (error) {
        // console.log(error)
    }

 })
 .catch((data, status) => {
    // console.log('Request failed');
 })



