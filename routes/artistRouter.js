const express = require('express');

const artistsRouter = express.Router();

artistsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all artists to you');
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /artists`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /artists`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /artists');
    });

artistsRouter.route('/:artistID')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send artist details for artist: ${req.params.artistID}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /artists/${req.params.artistID}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /artists/${req.params.artistID}`);
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end(`DELETE operation not supported on /artists/${req.params.artistID}`);
    });

module.exports = artistsRouter;