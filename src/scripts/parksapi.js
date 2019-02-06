// App Token -> Vtz7msl7lzqTYMikAi9QE5Ibu
// Secrete Token -> 3EwjwycjpzAMrW5aI1Yv-oINPADHJsFpbc1N

// const searchParks = parksApi => {
//     // document.querySelector("#..").innerHTML = "";
//     fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parksApi}=Yes`, {
//         "$$app_token": "Vtz7msl7lzqTYMikAi9QE5Ibu"
//     })
//         .then(parks => parks.json())
//         .then(parsedParks => {
//             console.log(parsedParks)
//         })
// }


// fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parksApi}=Yes`, {
//         "$$app_token": "Vtz7msl7lzqTYMikAi9QE5Ibu"
// })

// console logs 4 parks w/ name and address
const searchParks = parkParam => {
document.querySelector("#..").innerHTML = "";

fetch( `https://data.nashville.gov/resource/xbru-cfzi.json?name=${parkParam}`)

        .then(parks => parks.json())
        .then(parsedParks => {
           for(i = 0; i < 4; i++){
            console.log(parsedParks[i].park_name, parsedParks[i].mapped_location_address)
           }
        })
    }
// Search
document.querySelector("#..").addEventListener("click", () => {
    // user input
    const searchAll = document.querySelector("#..").value;
    // console
    searchPark(searchAll);
})

document.querySelector("#..").innerHTML +=
