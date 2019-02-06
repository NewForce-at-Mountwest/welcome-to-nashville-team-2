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
        console.log(results)
        console.log(results.restaurants[0].restaurant.name, results.restaurants[0].restaurant.location.address)
    })

}



// restaruantAPI("cookies")