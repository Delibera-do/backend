const express = require('express');
const appointmentControleler = require('../controllers/appointmentController');
const routes = express.Router();


routes.post('/', (req,res) => appointmentControleler.store(req,res));
routes.delete('/', (req,res) => appointmentControleler.delete(req,res));
routes.get('/', (req,res) => appointmentControleler.index(req,res));
routes.get('/id/:id', (req,res) => appointmentControleler.show(req,res));


module.exports = routes; 
/*

 
  if (req.body.type !== 'MESSAGE')
    return console.log(req.body.type);

  if (messages.findIndex(message => message.id == req.body.message.id) != '-1')
    return console.log('messagem já cadastrada');

  const responseWhatsAPP = req.body;
  const messageContainer = responseWhatsAPP.message.contents[1];
  if (messageContainer.type === 'text') {

    messages.push(
      {
        id: responseWhatsAPP.message.id,
        user: responseWhatsAPP.message.visitor.name,
        number: responseWhatsAPP.message.from,
        messageType: messageContainer.type,
        messageBody:  messageContainer.text 
      }
    );
  }

  console.log(messages);


*/
