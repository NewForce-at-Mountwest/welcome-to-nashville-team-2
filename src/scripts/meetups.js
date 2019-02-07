// const searchMeetUpFunction = (searchMeetup) => {
fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville&token=TJMRPXJLONUHWSFDGZJZ`, {
    headers: {
        "Authorization": "Bearer TJMRPXJLONUHWSFDGZJZ",
        "Accept": "application/json"
    }
})
    .then(meetUps => meetUps.json())
    .then(parsedMeetUps => {
        console.log(parsedMeetUps.events[0]);
        // let HTMLMeetString = "";
        
//         for (i = 0; i < 4; i++) {
//            
//         document.querySelector("#search-results").innerHTML = HTMLMeetString += 
    
    
//     document.querySelector("#concert-btn").addEventListener("click", () => {
//         const searchMeets = document.querySelector("#concert-text").value;
    }
)

