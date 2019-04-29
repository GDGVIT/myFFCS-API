const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

router.post('/add', async (req, res) => {

    try {
        if(req.body.uid && req.body.userName){
            const newUser = new UserModel({
                _id: req.body.uid,
                userName: req.body.userName,
                timetable: []
            });
            await newUser.save();
            return res.status(200).send('User Created');
        }
        else{
            throw 'All fields are mandatory'
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send('Error');
    }
});

router.get('/:id', async (req, res) => {

    try {
        const user = await UserModel.findById(req.params.id);
        if(user)
            return res.status(200).json(user);
        else
            return res.status(404).send('Not Found');
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error');
    }

});

router.post('/:id/timetable', async (req, res) => {

    try {
        if(req.params.id && req.body.timetable){
            await UserModel.findByIdAndUpdate(req.params.id, { timetable: req.body.timetable });
            return res.status(200).send('Timetable Created/Updated');
        }
        else{
            throw 'All fields are mandatory'
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send('Error');
    }

});

module.exports = router;