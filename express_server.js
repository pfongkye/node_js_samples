const Server = require('express');

const app = new Server();

//template files location
app.set('views', __dirname + '/views');
//set template engine pug
app.set('view engine', 'pug');

app.get('/', (_req, res)=>{
    res.send('<html><body><h1>Hello world</h1></body></html>')
})

app.get('/template', (_req, res)=>{
    //compiles the index.pug file and renders HTML string with the data (title, message) passed as argument
    res.render('index', {title:'My rendered template', message: 'Hello world!'});
})

app.get('/person/:id', (req, res)=>{
    res.json({Person: req.params.id});
});

const port = process.env.PORT || '3000';

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})