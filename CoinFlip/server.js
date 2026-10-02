/* perso needs option heads or tails and win statements */


const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')


const flipCoin = ['Heads', 'Tails'];


const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {

  }

server.listen(8000);


//http://localhost:8000/






/*
flipArray = ['Heads', 'Tails']
    if('student' in params){
      if(params['student']== 'Heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * 2)]
        if(params['student'] == randomFlip){
          winOrLose = 'Won'
        }else{
          winOrLose = 'Lose'
        }
        console.log(randomFlip)
        const objToJson = {
          yourChoice: "Heads",
          flipResult: `The flip was ${randomFlip}`,
          currentOccupation: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] == 'Tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * 2)]
        if(params['student'] == randomFlip){
          winOrLose = 'Won'
        }else{
          winOrLose = 'Lose'
        }
        console.log(randomFlip)
        const objToJson = {
          yourChoice: "Tails",
          flipResult: `The flip was ${randomFlip}`,
          currentOccupation: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon */ 