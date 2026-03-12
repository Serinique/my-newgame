async function sendChoice(choice){

const response = await fetch("/generate-story",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({choice:choice})
})

const data = await response.json()

document.getElementById("story").innerText = data.story

}
