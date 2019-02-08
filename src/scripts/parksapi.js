const searchParkFunction = (searchPark) => {
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${searchPark}=Yes`, {
    "$$app_token": "Vtz7msl7lzqTYMikAi9QE5Ibu"
})

    .then(parks => parks.json())
    .then(parsedParks => {
        let emptyString = " "
        for (i = 0; i < 4; i++) {
            // emptyString += resultsString(parsedParks[i].park_name, parsedParks[i].mapped_location_address, i, "park")
            emptyString += resultsStringV2(parsedParks[i].park_name, parsedParks[i].mapped_location_address, i, "park") 
        }
        document.querySelector("#search-results").innerHTML = emptyString;
    })
}
// searchParkFunction("community_center")

// ************** Moved Save Component to Parks Page *************** 

// document.querySelector(".results-container").addEventListener("click", () => {
//     if(event.target === document.querySelector("#save-btn1-park")) {
//     let save1 = document.querySelector("#s1").textContent
//     // const cln = save1.cloneNode(true)
//     // const cln1 = cln.remove("input")

//     document.querySelector("#park-save").innerHTML = `Park: ${save1}`
//     // document.querySelector("#park-save").insertAdjacentHTML(save1)

//     // console.log("you clicked me")
//     // console.log(save1)
//     } else if (event.target === document.querySelector("#save-btn2-park")) {
//         let save2 = document.querySelector("#s2").textContent


//         document.querySelector("#park-save").innerHTML = `Park: ${save2}`

//         } else if (event.target === document.querySelector("#save-btn3-park")) {
//             let save3 = document.querySelector("#s3").textContent


//             document.querySelector("#park-save").innerHTML = `Park: ${save3}`

//             // console.log("you clicked me")
//             } else if (event.target === document.querySelector("#save-btn4-park")) {
//                 let save4 = document.querySelector("#s4").textContent

//                 document.querySelector("#park-save").innerHTML = `Park: ${save4}`

//                 // console.log("you clicked me")
//                 }




// })

// document.querySelector(".results-container").addEventListener("click", () => {
//     if(event.target.className === "park" && event.target.id === "save-btn1") {
//         let save1 = document.querySelector("#s1").textContent
//         // const cln = save1.cloneNode(true)
//         // const cln1 = cln.remove("input")
    
//         document.querySelector("#park-save").innerHTML = `Park: ${save1}`
//         // document.querySelector("#park-save").insertAdjacentHTML(save1)
    
//         console.log("you clicked me")
//         // console.log(save1)
//         } else if (event.target.className === "park" && event.target.id === "save-btn2") {
//             let save2 = document.querySelector("#s2").textContent
    
    
//             document.querySelector("#park-save").innerHTML = `Park: ${save2}`
    
//             } else if (event.target.className === "park" && event.target.id === "save-btn3") {
//                 let save3 = document.querySelector("#s3").textContent
    
    
//                 document.querySelector("#park-save").innerHTML = `Park: ${save3}`
    
//                 // console.log("you clicked me")
//                 } else if (event.target.className === "park" && event.target.id === "save-btn4") {
//                     let save4 = document.querySelector("#s4").textContent
    
//                     document.querySelector("#park-save").innerHTML = `Park: ${save4}`
    
//                     // console.log("you clicked me")
//                     }
//     })