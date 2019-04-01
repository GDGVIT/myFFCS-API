const express = require('express');
const router = express.Router();
const ffcsData = require('../data/all_data.json');

router.get('/searchbyfaculty/:keyword', (req, res) => {

    const keyword = req.params.keyword.toLowerCase();

    try {
        const filteredData = ffcsData.filter((classRoom) => {
            return classRoom.FACULTY.toLowerCase().indexOf(keyword) >= 0 ? true: false;
        });

        return res.status(200).json(filteredData);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error');
    }

});

router.get('/searchbycoursename/:keyword', (req, res) => {

    const keyword = req.params.keyword.toLowerCase();

    try {
        const filteredData = ffcsData.filter((classRoom) => {
            return classRoom.TITLE.toLowerCase().indexOf(keyword) >= 0 ? true: false;
        });

        return res.status(200).json(filteredData);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error');
    }

});

router.get('/:classRoomId', (req, res) => {

    try {
        return res.status(200).json(ffcsData[req.params.classRoomId]);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error');
    }

});



module.exports = router;