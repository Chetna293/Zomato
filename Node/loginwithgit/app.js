const express = require('express')
const app = express();
const superagent = require('superagent');
const request = require('request');
const bodyParser = require('body-parser');
const port = 9800;
const cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());

app.get('/',(req,res) => {
    res.send('<a href="https://github.com/login/oauth/authorize?client_id=89b7dbe5d353e0e4c8bb">Login With Github</a>')
})

app.post('/oauth',(req,res) => {
    console.log(req.body)
    const code = req.body.code;
    if(!code){
        res.send('Login Fail')
    }

    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'89b7dbe5d353e0e4c8bb',
            client_secret:'6088df53ce8772202761ac8bce184f193dd9123c',
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            let access_token = result.body.access_token
            const option = {
                uri: 'https://api.github.com/user',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `token ${access_token}`,
                    'User-Agent':'mycode'
                }
            }
            request(option,(err,response,body) => {
                return res.send(body)
            })
        })
})

app.listen(port,()=> {
    console.log(`listening on ${port}`)
})