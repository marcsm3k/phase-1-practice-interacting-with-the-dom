// ### Deliverables

// Add the following features one by one, refreshing the page to see your
// functionality working as you build.


document.addEventListener("DOMContentLoaded", () => {

    let interval = setInterval(incrementCounter, 1000) 
    const plus = document.getElementById('plus')
    plus.addEventListener("click", incrementCounter)

    const minus = document.getElementById('minus')
    minus.addEventListener("click", () => {
        let count = document.getElementById('counter')
        count.textContent = parseInt(count.textContent,10) - 1
    })
    
    const heart = document.getElementById('heart')
    let likesObj = {}
    let li = document.createElement("li")
    heart.addEventListener("click", () => {
        let counterValue = document.getElementById('counter').textContent
        if(likesObj[counterValue]) {
            likesObj[counterValue] += 1
        } else {
            likesObj[counterValue] = 1
            li.innerText = `${counterValue} has been liked ${likesObj[counterValue]} times.`
        }

        let likesUL = document.querySelector(".likes")
        likesUL.appendChild(li)
    })
    const submit = document.getElementById('submit')
    const pause = document.getElementById('pause')
    pause.addEventListener("click", () => {
        if(pause.innerText === "resume") {
            pause.innerText = "pause"
            interval = setInterval(incrementCounter, 1000) 
        } else {
            pause.innerText = "resume"
            clearInterval(interval)
        }

        minus.disabled = !minus.disabled
        plus.disabled = !minus.disabled
        heart.disabled = !minus.disabled
        submit.disabled = !minus.disabled

    })

        let commentForm = document.querySelector("#comment-form")
        commentForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const list = document.getElementById('list')
            let li = document.createElement("li")
            li.innerText = e.target[0].value
            list.appendChild(li)
            commentForm.reset()
        })
}) 


function incrementCounter(){
    let count = document.getElementById('counter')
    count.textContent = parseInt(count.textContent,10) + 1
    
}
 


// // As a user, I can:

// // - See the timer increment every second once the page has loaded.





// const commentForm = document.querySelector('#comment-form')
// commentForm.addEventListener("submit", handleSubmit)






// - Manually increment and decrement the counter using the plus and minus buttons.

// - "Like" an individual number of the counter. I should see the count of the
//   number of "likes" associated with that number displayed.


// - Pause the counter, which should:
//   - pause the counter
//   - disable all buttons except the pause button
//   - switch the label on the button from "pause" to "resume"
// - Click the "restart" button to restart the counter and re-enable the buttons.
// - Leave comments on my gameplay, such as: "Wow, what a fun game this is."


// function handleSubmit(event){
//     event.preventDefault()
//     const comment = event.target.querySelector("input").value
//     const li = document.createElement("li")
//     li.innerText = comment
//     comments.append(li)
//     event.target.reset()
