const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.json())

app.post("/generate-story", async (req,res)=>{

const choice = req.body.choice

// Example AI logic (demo)
const story = "You chose: " + choice + ". Suddenly something strange happens..."

res.json({story:story})

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})
