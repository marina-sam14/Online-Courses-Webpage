const express = require('express')
var cors = require('cors');



const app = express()
app.use(cors());
app.use(express.json());

const port = 3000


app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
})




function getCourseIdFromCourseJson(courseJson) {
    return courseJson.workid
}



