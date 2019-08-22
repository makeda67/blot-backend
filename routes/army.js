const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const Army = require('../models/Army');

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin
  } = require('../helpers/middlewares');
  
  router.post('/create', isLoggedIn(), async (req, res, next) => {
      console.log('back end create')
    try {
        const idUser = req.session.currentUser._id;
        console.log('hello i am in create', idUser)
    const army = await Army.create( {idUser} )
        res.status(200).json(army)
    }  catch(error) {
        console.log(error)
    }
  });

  router.get('/:id/get', async (req,res, next) => {
      const { id } = req.params; 
      console.log(req.params);
    try {
        const listOfSoldiers = await Army.findById(id);
        res.status(200).json(listOfSoldiers);
    } catch(error) {
         next(error);
    }
     
    });

  module.exports = router;