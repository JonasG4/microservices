const server = require('./src/app'); 

server.listen(process.env.PORT || 6000, () => {
  console.log(`Languages Services working in port: ${process.env.PORT || 6000}`)  
})