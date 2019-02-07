// Zomato API
// Here's an example fetch to search restuarants in Nashville.

// 1138 is the id for the city of Nashville
// entity_type must be set to city
// Your API key must be added as user-key to the headers configuration for your request
// API # a9221722337b768a723cd53c1409cb80
const restaruantAPI = (inquiry) => {
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${inquiry}`, {
        headers: {
            "Accept": "application/json",
            "user-key": "a9221722337b768a723cd53c1409cb80"
        }
    })
    .then(r => r.json())
    .then(results => {
        let htmlString =""
        for(let i=0; i < 4; i++) {
            htmlString += resultsString(results.restaurants[i].restaurant.name, results.restaurants[i].restaurant.location.address, i, "food")
        
        }
        document.querySelector("#search-results").innerHTML = htmlString
    })

}

document.querySelector("#restaurant-btn").addEventListener("click", () => {
    let userSearch = document.querySelector("#restaurant-text").value 
    restaruantAPI(userSearch)

})
    

 


// restaruantAPI("cookies")