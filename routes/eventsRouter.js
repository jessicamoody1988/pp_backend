const express = require('express');

const eventsRouter = express.Router();

eventsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all events to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /events`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /events`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /events');
    });

eventsRouter.route('/:eventID')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send artist details for artist: ${req.params.eventID}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /events/${req.params.eventID}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /events/${req.params.eventID}`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`DELETE operation not supported on /events/${req.params.eventID}`);
    });

module.exports = eventsRouter;