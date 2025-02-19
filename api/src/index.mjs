import express from 'express'
import config from '../config.js'
import routes from './router.js'

const app = new express();

app.get('/', (req, res) => res.send('Welcome to TOP College Chat API'));
app.use('/', routes);

app.listen(config.API_PORT, () => {
    console.log("Server start on :" + config.API_PORT);
})