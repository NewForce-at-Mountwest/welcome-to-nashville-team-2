// function that just prints error messages
const handleWeirdSearchInputPark = (warningMessagePark) => {
    // if it doesn't have a .records property, print an error message
    document.querySelector(
      "#search-results"
    ).innerHTML = `<div class="jumbotron">
  <h1 class="display-4">Error</h1>
  <p class="lead">"Search Term Not Found!</p>
  <hr class="my-4">
  <p>Please try something else, like "baseball field" or "dog park"</p>
</div>`;
    }


// // function that just prints error messages for Restaurants
// const handleWeirdSearchInputFood = (warningMessageFood) => {
//     // if it doesn't have a .records property, print an error message
//     document.querySelector(
//       "#search-results"
//     ).innerHTML = `<div class="jumbotron">
//   <h1 class="display-4">Not Found</h1>
//   <p class="lead">${warningMessageFood}</p>
//   <hr class="my-4">
//   <p>Please try something else, like "burger"</p>
//   </div>`;

// }
// function that just prints error messages for Events
const handleWeirdSearchInputEvent = (warningMessageEvent) => {
    // if it doesn't have a .records property, print an error message
    document.querySelector(
      "#search-results"
    ).innerHTML = `<div class="jumbotron">
  <h1 class="display-4">Error!</h1>
  <p class="lead">"Search Term Not Found"</p>
  <hr class="my-4">
  <p>Please try something else, like "beachbody" or "art"</p>
</div>`;
    }