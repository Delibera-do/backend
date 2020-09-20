const express = require('express');
const routes = express.Router();
const generateWhatsappMessage = require('../utils/generateWhatsappMessage');

routes.post('/shedule/:id', (req,res) => generateWhatsappMessage.greetingSheduleAppointment(req.params.id));
routes.post('/pull/:id', (req,res) => generateWhatsappMessage.greetingSheduleAppointment(req.params.id));

module.exports = routes; 