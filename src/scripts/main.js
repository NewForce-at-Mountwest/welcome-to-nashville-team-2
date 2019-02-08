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
const resultsForMeetUpString = (name, link, numerator, typeOfSearch) => {
    return `<li id=s${numerator + 1}>${name} <a href= "${link}"> More Info!</a> <input type="submit" value="Save" id="save-btn${numerator + 1}-${typeOfSearch}" style="display:inline"/>
     </li>`
 }

 const resultsStringV2 = (name, location, numerator, typeOfSearch) => {
    return `<li class = "${typeOfSearch}" id=s${numerator + 1}>${name}  ${location} <input type="submit" value="Save" id="save-btn${numerator + 1}" style="display:inline"/>
     </li>`
 }
