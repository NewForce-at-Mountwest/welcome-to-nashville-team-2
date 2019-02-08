// Zomato API
// Here's an example fetch to search restuarants in Nashville.

// 1138 is the id for the city of Nashville
// entity_type must be set to city
// Your API key must be added as user-key to the headers configuration for your request
// API # a9221722337b768a723cd53c1409cb80
const restaruantAPI = (inquiry) => {
    // fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${inquiry}`, {
    //     headers: {
    //         "Accept": "application/json",
    //         "user-key": "a9221722337b768a723cd53c1409cb80"
    //     }
    // })

    fetch("http://localhost:8088/restaurants")
    .then(r => r.json())
    .then(results => {
        let htmlString =""
        for(let i=0; i < 4; i++) {

            htmlString += resultsStringV2(results[i].restaurant.name, results[i].restaurant.location.address, i, "food")


            // htmlString += resultsString(results.restaurants[i].restaurant.name, results.restaurants[i].restaurant.location.address)


        }
        document.querySelector("#search-results").innerHTML = htmlString
    })

}
document.querySelector("#restaurant-btn").addEventListener("click", () => {
    let userSearch = document.querySelector("#restaurant-text").value
    restaruantAPI(userSearch)

})

document.querySelector(".results-container").addEventListener("click", () => {
    if(event.target === document.querySelector("#save-btn1-food")) {
    let save1 = document.querySelector("#s1").textContent

    document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save1}`

    } else if (event.target === document.querySelector("#save-btn2-food")) {
        let save2 = document.querySelector("#s2").textContent


        document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save2}`

        } else if (event.target === document.querySelector("#save-btn3-food")) {
            let save3 = document.querySelector("#s3").textContent


            document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save3}`

            // console.log("you clicked me")
            } else if (event.target === document.querySelector("#save-btn4-food")) {
                let save4 = document.querySelector("#s4").textContent

                document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save4}`

                // console.log("you clicked me")
                }




})

// restaruantAPI("cookies")