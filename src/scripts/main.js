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


const resultsString = (name, location) => {
   return `<li>${name}  ${location} <input type="submit" value="Save" id="save-btn" style="display:inline"/>
    </li>`
}

// const franklin = "Hello my name is Franklin"
// const placeFranklin = "1234 happy street "
// document.querySelector("#search-results").innerHTML = resultsString(franklin)

<<<<<<< HEAD
=======
// const franklin = "Hello my name is Franklin"
// const placeFranklin = "1234 happy street "
// document.querySelector("#search-results").innerHTML = resultsString(franklin)

>>>>>>> master
// console.log(resultsString(franklin, placeFranklin))











