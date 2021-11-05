const express = require('express')
const app = express()

const APP_ID = process.env.APP_ID

app.get('/', (req, res) => {
    res.send(`<h2>Hello World! Homepage with App ID: ${APP_ID}</h2>`)
})

app.get('/admin', (req, res) => {
    res.send(`<h2>Admin Page with App ID: ${APP_ID}</h2>`)
})

app.listen(APP_ID, () => console.log(`Server is Listening on PORT: ${APP_ID}`))
