const express = require('express');

const adbRouter = express.Router();

adbRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('You have reached the Admin Dashboard');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /adb`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /adb`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /adb');
    });

adbRouter.route('/artists')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('You have reached the Admin Dashboard: Artists Section');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /adb/artists`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /adb/artists`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /adb/artists');
    });

adbRouter.route('/artists/:artistID')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`You have reached the Admin Dashboard: Artists Section for artist #${req.params.artistID}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /adb/artists/${req.params.artistID}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /adb/artists/${req.params.artistID}`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`DELETE operation not supported on /adb/artists/${req.params.artistID}`);
    });

adbRouter.route('/events')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('You have reached the Admin Dashboard: Events Section');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /adb/events`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /adb/events`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /adb/events');
    });

adbRouter.route('/events/:eventID')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`You have reached the Admin Dashboard: Eventss Section for artist #${req.params.eventID}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /adb/events/${req.params.eventID}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /adb/events/${req.params.eventID}`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`DELETE operation not supported on /adb/events/${req.params.eventID}`);
    });

module.exports = adbRouter;