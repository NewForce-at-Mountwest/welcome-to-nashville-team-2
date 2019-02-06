const searchParkFunction = (searchPark) => {
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${searchPark}=Yes`, {
    "$$app_token": "Vtz7msl7lzqTYMikAi9QE5Ibu"
})

    .then(parks => parks.json())
    .then(parsedParks => {
        for (i = 0; i < 4; i++) {
            console.log(parsedParks[i].park_name, parsedParks[i].mapped_location_address)
        }
    })
}
// searchParkFunction("community_center")