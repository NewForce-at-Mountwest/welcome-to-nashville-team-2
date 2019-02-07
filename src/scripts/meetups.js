const searchMeetUpFunction = (searchMeetup) => {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchMeetup}&token=TJMRPXJLONUHWSFDGZJZ`, {
        headers: {
            "Authorization": "Bearer TJMRPXJLONUHWSFDGZJZ",
            "Accept": "application/json"
        }
    })

        .then(meetUps => meetUps.json())
        .then(parsedMeetUps => {
            console.log(parsedMeetUps);
            let HTMLMeetString = "";
            for (i = 0; i < 4; i++) {
                HTMLMeetString += resultsForMeetUpString(parsedMeetUps.events[i].name.text, parsedMeetUps.events[i].url)
            }
            document.querySelector("#search-results").innerHTML = HTMLMeetString;
        })
}
document.querySelector("#concert-btn").addEventListener("click", () => {
    let userSearches = document.querySelector("#concert-text").value;
    searchMeetUpFunction(userSearches);
    console.log(userSearches);
})




