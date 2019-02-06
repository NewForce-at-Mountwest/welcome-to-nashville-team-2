// SEARCH 
document.querySelector("#park-btn").addEventListener("click", () =>{
    const searchPark = document.querySelector("#park-text").value;
    console.log(searchPark)
})


// Search through the api
// const searchParks = parkNameParam => {
//     document.querySelector("#search-results").innerHTML = "";
//     fetch(
//       `https://paleobiodb.org/data1.2/taxa/list.json?park_name=${parkNameParam}`
//     )
//       .then(parks => parks.json())
//       .then(parsedParks => {

//       })



const resultsString = (input) => {
   return `<li>${input} <input type="submit" value="Save" id="save-btn" style="display:inline"/>
    </li>`
}


const franklin = "Hello my name is Franklin"
document.querySelector("#search-results").innerHTML = resultsString(franklin)

console.log(resultsString(franklin))











