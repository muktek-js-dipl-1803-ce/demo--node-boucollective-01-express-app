// part.01.A-1 import express

const express = require('express')

// part.01.A-2 initialize express
app = express()
const PORT = 3000

  + configure `app.use(...)` to send simple text to client
  + start server: `app.listen(«PORT_NUMBER», ()=> ... )`
  
// part.01.A-3 write a 'catch-all' route with callback function that responds to
//         client requests
app.use((req, res)=>{
  
// part.01.A-4
  // express passes `req` an first argument object with request information
  // express passes `res` an second argument object with methods to respond to user
  res.send('<h3> 404 - big error - page no exist</h3>')
})

// part.01.A-5
  // app will listen on localhost:3000 
app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
