const http = require('http')
const fs = require('fs')
const path = require('path')


const port =  8080


const server = http.createServer((req, res) => {
    if(req.url === "/") { 
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if(err) throw err
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html');
            res.end(content, 'utf-8');
        })
    } 
     if(req.url === "/about") {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if(err) throw err
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html');
            res.end(content, 'utf-8');
        })
     }
      if(req.url === "/contact-me") {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, content) => {
            if(err) throw err
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html');
            res.end(content, 'utf-8');
        })
      }
    if(req.url === "/404")  {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            if(err) throw err
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html');
            res.end(content, 'utf-8');
        })
    }
})


server.listen(port, () => {
    console.log(`server listening at port ${port}`)
})

