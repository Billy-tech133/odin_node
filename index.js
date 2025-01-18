const http = require('http')
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port =  8080


    app.get("/", (req, res,) => {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-Type': "text/html"})
            res.end(content, "utf-8")
        })
    })
    app.get("/about", (req, res) => {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-Type': "text/html"})
            res.end(content, "utf-8")
        })
    }) 
    app.get("/contact-me", (req, res) => {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-Type': "text/html"})
            res.end(content, "utf-8")
        })
    })
    app.get("/404", (req, res) => {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-Type': "text/html"})
            res.end(content, "utf-8")
        })
        
    })  
       

app.listen(port, () => {
    console.log(`server listening at port ${port}`)
})

