const express = require('express');
const router = express.Router();
const cabinet = require('../controllers').cabinet;
const travel = require('../controllers').travel;
const tour = require('../controllers').tour;
const guest = require('../controllers').guest;

module.exports = function (app) {
  app.use('/', router);
};
//
// router.get('/api/v1/cabinet/home/:id', cabinet.home);
// router.get('/api/v1/cabinet/profile/:id', cabinet.profile);
// router.get('/api/v1/cabinet/settings/:id', cabinet.settings);
// router.post('/api/v1/cabinet/settings/update', cabinet.settings);
// // travel
// router.get('/api/v1/cabinet/travel/all', travel.allTravels);
// router.get('/api/v1/cabinet/travel/create', travel.allTravels);
// router.get('/api/v1/cabinet/travel/:id/info', travel.getInfo);
// router.post('/api/v1/cabinet/travel/create', travel.addTravel);
// router.post('/api/v1/cabinet/travel/:id/update', travel.updateTravel);
// router.post('/api/v1/cabinet/travel/:id/delete', travel.deleteTravel);
// // tour
// router.get('/api/v1/cabinet/tour/all', tour.allTours);
// router.get('/api/v1/cabinet/tour/:id/info', tour.getTourInfo);
// router.get('/api/v1/cabinet/tour/create', tour.showCreateTourPage);
// router.post('/api/v1/cabinet/tour/create', tour.createNewTour);
// router.post('/api/v1/cabinet/tour/:id/update', tour.updateTour);
// router.post('/api/v1/cabinet/tour/:id/delete', tour.deleteTour);
// // guest
// router.get('/api/v1/cabinet/guest/all', guest.getAllGuest);
// router.post('/api/v1/cabinet/guest/add', guest.addNewGuest);
// router.post('/api/v1/cabinet/guest/:id/delete', guest.deleteGuest);
