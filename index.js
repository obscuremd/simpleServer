const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(7000,()=>{
    console.log('server listening on 700');
})

