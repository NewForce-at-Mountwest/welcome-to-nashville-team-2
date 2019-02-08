const searchParkFunction = (searchPark) => {
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${searchPark}=Yes`, {
    "$$app_token": "Vtz7msl7lzqTYMikAi9QE5Ibu"
})

    .then(parks => parks.json())
    .then(parsedParks => {
        let emptyString = " "
        for (i = 0; i < 4; i++) {
            emptyString += resultsString(parsedParks[i].park_name, parsedParks[i].mapped_location_address, i, "park")
        }
        document.querySelector("#search-results").innerHTML = emptyString;
    })
}

// searchParkFunction("community_center")