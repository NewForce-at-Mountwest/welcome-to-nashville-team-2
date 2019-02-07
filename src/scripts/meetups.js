// TJMRPXJLONUHWSFDGZJZ
const searchMeetUpFunction = (searchMeetup) => {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchPark}&token=${TJMRPXJLONUHWSFDGZJZ}`, {
 headers: {
   "Authorization": `Bearer ${TJMRPXJLONUHWSFDGZJZ}`,
   "Accept": "application/json"
 }
})
    
        .then(meetups => meetUps.json())
        .then(parsedMeetUpss => {
            for (i = 0; i < 4; i++) {
                console.log(parsedMeetUpss[i].(whattttt), parsedMeetUps[i].(whattttt))
            }
        })
    }