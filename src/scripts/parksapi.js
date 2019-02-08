const searchParkFunction = (searchPark) => {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${searchPark}=Yes`, {
        "$$app_token": "Vtz7msl7lzqTYMikAi9QE5Ibu"
    })

        .then(parks => parks.json())
        .then(parsedParks => {
            console.log(parsedParks.error);
            let emptyString = " ";
            // if the searchPark returns an error code of 400 do this
            if (parsedParks.error) {
                throw parsedParks;
            }

            else {
            // loop through the results and return 4 of them to the search-results container
            for (i = 0; i < 4; i++) {
                emptyString += resultsString(parsedParks[i].park_name, parsedParks[i].mapped_location_address, i, "park")
            }
            // print them to search-results
            document.querySelector("#search-results").innerHTML = emptyString;
        
        }   
        // this catches the throw of parsedParks.error
        })
        .catch(error => {
// console.log(error);
            handleWeirdSearchInputPark();
        }
        )
}

// searchParkFunction("community_center")