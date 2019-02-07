// Allows the user to search on the search bar and when they hit search
// it console.logs it, also replaces underscore with a space so its easier
// for them to type
document.querySelector("#park-btn").addEventListener("click", () =>{
    let parkInput = document.querySelector("#park-text").value;
    const newParkInput = parkInput.replace(" ", "_")
    console.log(newParkInput)
    searchParkFunction(newParkInput)
})
// .replace
// tolowercase


const resultsString = (name, location, numerator, typeOfSearch) => {
   return `<li class = "attempt2" id=s${numerator + 1}>${name}  ${location} <input type="submit" value="Save" id="save-btn${numerator + 1}-${typeOfSearch}" style="display:inline"/>
    </li>`
}
const resultsForMeetUpString = (name, link) => {
    return `<li>${name} <a href= "${link}"> More Info!</a> <input type="submit" value="Save" id="save-btn" style="display:inline"/>
     </li>`
 }

document.querySelector(".results-container").addEventListener("click", () => {
    if(event.target === document.querySelector("#save-btn1-park")) {
    let save1 = document.querySelector("#s1").textContent
    // const cln = save1.cloneNode(true)
    // const cln1 = cln.remove("input")

    document.querySelector("#park-save").innerHTML = `Park: ${save1}`
    // document.querySelector("#park-save").insertAdjacentHTML(save1)

    // console.log("you clicked me")
    // console.log(save1)
    } else if (event.target === document.querySelector("#save-btn2-park")) {
        let save2 = document.querySelector("#s2").textContent


        document.querySelector("#park-save").innerHTML = `Park: ${save2}`

        } else if (event.target === document.querySelector("#save-btn3-park")) {
            let save3 = document.querySelector("#s3").textContent


            document.querySelector("#park-save").innerHTML = `Park: ${save3}`

            // console.log("you clicked me")
            } else if (event.target === document.querySelector("#save-btn4-park")) {
                let save4 = document.querySelector("#s4").textContent

                document.querySelector("#park-save").innerHTML = `Park: ${save4}`

                // console.log("you clicked me")
                }




})

// var elmnt = document.getElementsByTagName("DIV")[0];
// var cln = elmnt.cloneNode(true);
// document.body.appendChild(cln);








