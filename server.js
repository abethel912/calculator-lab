// Make a route in server.jsthat responds to the URI calc. Give the route two params, :num1and :num2.

// Make it so that if the user enters: http://localhost:3000/calc/4/4in the browser, the server sends back a response of 8.

const express = require('express')
const app = express()

const port = 3000

require('dotenv').config()


//put in a route called calcquery takes in 2 parameters and a query for operation

app.get('/calcquery/:numOne/:numTwo', (request, response) => {
  // console.log(
  //     request.params.numOne,
  //     request.params.numTwo,
  //     `the object type of ${request.params.numOne} which is on the URL is ${}`,
  // )
  //anything typed inside the URL will always be a string

  const num1 = parseInt(request.params.numOne)
  const num2 = parseInt(request.params.numTwo)
  const operation = request.query.operation

  if (operation === 'add') {
    response.send(`the sum is ${num1 + num2}`)
  } else if (operation === 'subtract') {
    response.send(`the subtracted value is ${num1 - num2}`)
  } else if (operation === 'multiply') {
    response.send(`the multiply value is ${num1 * num2}`)
  } else if (operation === 'divide') {
    response.send(`the divide value is ${num1 / num2}`)
  } else if (operation === 'exponent') {
    response.send(`the exponent value is ${num1 ** num2}`)
  }
})
