const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const Army = require('../models/Army');
const User = require('../models/User');

const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin
  } = require('../helpers/middlewares');

  router.get("/getMyArmy", async (req, res, next) => {
      
    const {_id} = req.session.currentUser;
    User.findById(_id).populate("armies")
        .then((data)=>res.json(data).status(200))
 });

  router.post('/create', isLoggedIn(), async (req, res, next) => {
    try {
        const idUser = req.session.currentUser._id;
        const army = new Army({})
        const armyCreate = army.save();
        const updateUser = User.findByIdAndUpdate(idUser, {$push: { armies: army._id}}, {new: true})
        Promise.all([armyCreate, updateUser])
            .then((data)=>{res.status(200).json(data)})
        
    }  catch(error) {
        console.log(error)
    }
  });

  router.put('/edit/:id', async (req, res, next) => {
        const {id} = req.params;
        const {soldiers} = req.body;
        const newArmy = await Army.findByIdAndUpdate(id, {soldiers: soldiers});
        res.json(newArmy).status(200);
    })

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

    router.delete('/:id/delete', async (req, res, next) => {
        const {id} = req.params;
        const deleteArmy = await Army.findByIdAndDelete(id);
        await User.findByIdAndUpdate(req.session.currentUser._id, {$pull: {armies: id}})
        res.json(deleteArmy).status(200);
     })

   

 

  module.exports = router;