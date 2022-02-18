const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json')

const data = require('./justData')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.json())
// static file like css and bootstrap
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res)=>{
    res.render('home', { name: 'Home '})
})

app.get('/r/:subreddit', ( req, res)=>{
    const { subreddit } = req.params
    const data = redditData[ subreddit ]
    if(data){

     res.render('subreddit', { ...data, subreddit })
    } else{
        res.render('not found', {subreddit, name: '404 Not Found'})
    }
})

app.get('/random', (req, res)=>{
    const random = Math.floor(Math.random()  * 10)+1
    res.render('random', { random,  name: 'Radom'})
})

app.get('/cats', (req, res)=>{
    res.render('cats', { data, name: 'cats'})

})

app.listen(5000, ()=>{
    console.log('listening on port 3000');
})