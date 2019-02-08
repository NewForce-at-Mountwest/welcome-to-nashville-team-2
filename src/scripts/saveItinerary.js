const saveItinerary = () => {
    if(event.target.className === "park" && event.target.id === "save-btn1") {
    let save1 = document.querySelector("#s1").textContent
    // const cln = save1.cloneNode(true)
    // const cln1 = cln.remove("input")

    document.querySelector("#park-save").innerHTML = `Park: ${save1}`
    // document.querySelector("#park-save").insertAdjacentHTML(save1)

    console.log("you clicked me")
    // console.log(save1)
    } else if (event.target.className === "park" && event.target.id === "save-btn2") {
        let save2 = document.querySelector("#s2").textContent


        document.querySelector("#park-save").innerHTML = `Park: ${save2}`

        } else if (event.target.className === "park" && event.target.id === "save-btn3") {
            let save3 = document.querySelector("#s3").textContent


            document.querySelector("#park-save").innerHTML = `Park: ${save3}`

            // console.log("you clicked me")
            } else if (event.target.className === "park" && event.target.id === "save-btn4") {
                let save4 = document.querySelector("#s4").textContent

                document.querySelector("#park-save").innerHTML = `Park: ${save4}`

                // console.log("you clicked me")
                } else if(event.target.className === "food" && event.target.id === "save-btn1") {
                    let save1 = document.querySelector("#s1").textContent
                    // const cln = save1.cloneNode(true)
                    // const cln1 = cln.remove("input")
                
                    document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save1}`
                    // document.querySelector("#park-save").insertAdjacentHTML(save1)
                
                    console.log("you clicked me")
                    // console.log(save1)
                    } else if (event.target.className === "food" && event.target.id === "save-btn2") {
                        let save2 = document.querySelector("#s2").textContent
                
                
                        document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save2}`
                
                        } else if (event.target.className === "food" && event.target.id === "save-btn3") {
                            let save3 = document.querySelector("#s3").textContent
                
                
                            document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save3}`
                
                            // console.log("you clicked me")
                            } else if (event.target.className === "food" && event.target.id === "save-btn4") {
                                let save4 = document.querySelector("#s4").textContent
                
                                document.querySelector("#restaurant-save").innerHTML = `Restaurant: ${save4}`
                
                                // console.log("you clicked me")
                                } else if(event.target.className === "event" && event.target.id === "save-btn1") {
                                    let save1 = document.querySelector("#s1").textContent
                                    // const cln = save1.cloneNode(true)
                                    // const cln1 = cln.remove("input")
                                
                                    document.querySelector("#concert-save").innerHTML = `Event: ${save1}`
                                    // document.querySelector("#park-save").insertAdjacentHTML(save1)
                                
                                    console.log("you clicked me")
                                    // console.log(save1)
                                    } else if (event.target.className === "event" && event.target.id === "save-btn2") {
                                        let save2 = document.querySelector("#s2").textContent
                                
                                
                                        document.querySelector("#concert-save").innerHTML = `Event: ${save2}`
                                
                                        } else if (event.target.className === "event" && event.target.id === "save-btn3") {
                                            let save3 = document.querySelector("#s3").textContent
                                
                                
                                            document.querySelector("#concert-save").innerHTML = `Event: ${save3}`
                                
                                            // console.log("you clicked me")
                                            } else if (event.target.className === "event" && event.target.id === "save-btn4") {
                                                let save4 = document.querySelector("#s4").textContent
                                
                                                document.querySelector("#concert-save").innerHTML = `Event: ${save4}`
                                
                                                // console.log("you clicked me")
                                                }
                                            }