#Read Me

1) Open Git bash
!!TYPE AS Followed!!
2) CD Workspace
3) CD welcome-to-nashville-team-2
4) CD SRC
5) CD LIB
6) npm install
7) grunt
8) Use the park/food/events tool to search for things to do in Nashville
9) After using the search button, click the "Save" button or continue searching.
10) All of your saved events will appear into the box below the results box.



# Welcome to Nashville: Build an itinerary for a day trip to Music City

The Nashville Convention & Visitors Corp has contracted you to build a dashboard for tourists. Approximately 15.2 million people visit Nashville every year. NCVC wants an itinerary builder that lets tourists search for things to do during their stay.

In this app users can search for four different things to do/visit in Nashville:
* parks -- using the Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi)
* restaurants -- using the [Zomato API](https://developers.zomato.com/api)
* meetups -- using the [Eventbrite API](https://www.eventbrite.com/developer/v3/)
* concerts -- using the [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

You will be using all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Github
1. CSS
1. Building DOM components
1. Handling user events
1. Modular code
1. Persistent storage (stretch goal)

Your project managers (Josh, Kim, and Jordan) are here to answer any questions about technical requirements and to help remove any roadblocks once you start coding.

## Itinerary Builder

When the user searches for any of the four categories of things to do, the results should be listed in the DOM. Each result item should have an affordance to add the item to the current itinerary. Use your awesome new skills to select the text of the search result ( ie "John Mellencamp at the Ryman" ) and add it to the itinerary list. See the wireframe below for a visual cue for how this might look.


## Professional Requirements

1. Only one itinerary needs to exist at a time. If a user selects an item to add to the itinerary, and an item already exists for that category in the itinerary, then you will need to update the itinerary with the new data
1. All teammates must be using Grunt to run ESLint, http-server, and json-server during development
1. Each teammate is responsible for one API module. If your group has three members, you are only responsible for three of the APIs. Pick one to skip. You should discuss as a team how you want to handle printing to the DOM.
1. The README for your project should include *detailed* instructions on how another person can download and run the application. PRO TIP: Don't wait until the very end to create the README.
1. DO NOT FORGET to use a `.gitignore` file to keep git from tracking your node_modules folder
1. Styling is strictly _secondary_, beyond necessary display formatting. Do not add any additional visual enhancements until you have a fully functional app. The goal of every member of the team is to implement functionality with JavaScript
1. You can add whatever boilerplate you want to your `index.html` file, but all results from APIs must be printed dynamically with JavaScript.

## Visual Feature List

To help you along, here is a wireframe of how your app might look

![welcome wireframe](https://github.com/nashville-software-school/welcome-to-nashville/blob/master/welcome_nash_wireframe2.png?raw=true)

## Notes about the APIs

### Parks API
1. You need to put your `$$app_token` in your fetch
```js
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, {
  "$$app_token": yourToken
})

```

### Eventbrite API
1. You need to put your token in the URL of your fetch request and in the Authorization header
1. You also need to add `"Accept: "application/json"` to the headers.
 ```js
fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${yourToken}`, {
  headers: {
    "Authorization": `Bearer ${yourToken}`,
    "Accept": "application/json"
  }
})

```

### Zomato API

Here's an example fetch to search restuarants in Nashville.

* 1138 is the `id` for the city of Nashville
* `entity_type` must be set to `city`
* Your API key must be added as `user-key` to the `headers` configuration for your request

```js
fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating", {
        headers: {
            "Accept": "application/json",
            "user-key": "10101010101010101010"
        }
    })
    .then(r => r.json())
    .then(results => {
    })
```

## Stretch Goal
Persist your itinerary with Json-Server. You only need to have a single itinerary. If the user selects a different park, restaurant, etc, use a PUT to update the itinerary with the new data.

To start you off, here's an example of what the itinerary in your API might look like in your database once it's created by the user.

```json
{
  "itinerary":
      {
        "id": 1,
        "park": "Centennial Park",
        "restaurant": "Prince’s Hot Chicken",
        "meetup": "Meeple Mountain Board Game Night",
        "concert": "John Mellencamp at the Ryman"
      }
}
```

Here's an example of what the initial POST request might look like to create the itinerary, where `iteneraryObject` is the itenerary you want to add to your database:
```js
    fetch("http://localhost:8088/itinerary", {
        method: "POST", // or "PUT"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
```
Once the user has created the itinerary, you would use a PUT request to update any changes they make.


## Stretchier Goals
* Add an affordance to finalize an itinerary, and start a new one.
  * Add ability to view one or all of the itineraries
* Instead of displaying all the search fields, search results, and itinerary list at the same time, add a nav bar or other feature(s) for hiding/showing what the user wants to view


