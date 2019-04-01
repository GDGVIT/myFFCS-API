const express = require('express');
const router = express.Router();
const ffcsData = require('../data/all_data.json');

const getClassRooms = (res, searchField, searchKeyword) => {

    const keyword = searchKeyword.trim().toLowerCase();

    try {
        const filteredData = ffcsData.filter((classRoom) => {
            return classRoom[searchField].toLowerCase().indexOf(keyword) >= 0 ? true: false;
        });

        return res.status(200).json(filteredData);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Error');
    }
}

router.get('/searchbyfaculty/:keyword', (req, res) => {
    return getClassRooms(res, 'FACULTY', req.params.keyword);
});

router.get('/searchbycoursename/:keyword', (req, res) => {
    return getClassRooms(res, 'TITLE', req.params.keyword);
});

router.get('/searchbycoursecode/:keyword', (req, res) => {
    return getClassRooms(res, 'CODE', req.params.keyword);
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