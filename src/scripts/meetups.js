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
            if (parsedMeetUps.events.length === 0 ){
                handleWeirdSearchInputEvent();
            }
            else {
            for (i = 0; i < 4; i++) {
                HTMLMeetString += resultsForMeetUpString(parsedMeetUps.events[i].name.text, parsedMeetUps.events[i].url, i, "event")
            }
            document.querySelector("#search-results").innerHTML = HTMLMeetString;}
        })
    
}
document.querySelector("#concert-btn").addEventListener("click", () => {
    let userSearches = document.querySelector("#concert-text").value;
    searchMeetUpFunction(userSearches);
    console.log(userSearches);
})
// **********for the events saved searches**********
document.querySelector(".results-container").addEventListener("click", () => {
    if(event.target === document.querySelector("#save-btn1-event")) {
    let save1 = document.querySelector("#s1").textContent
    // const cln = save1.cloneNode(true)
    // const cln1 = cln.remove("input")

    document.querySelector("#concert-save").innerHTML = `Event: ${save1}`
    // document.querySelector("#park-save").insertAdjacentHTML(save1)

    // console.log("you clicked me")
    // console.log(save1)
    } else if (event.target === document.querySelector("#save-btn2-event")) {
        let save2 = document.querySelector("#s2").textContent


        document.querySelector("#concert-save").innerHTML = `Event: ${save2}`

        } else if (event.target === document.querySelector("#save-btn3-event")) {
            let save3 = document.querySelector("#s3").textContent


            document.querySelector("#concert-save").innerHTML = `Event: ${save3}`

            // console.log("you clicked me")
            } else if (event.target === document.querySelector("#save-btn4-event")) {
                let save4 = document.querySelector("#s4").textContent

                document.querySelector("#concert-save").innerHTML = `Event: ${save4}`}



            })










           