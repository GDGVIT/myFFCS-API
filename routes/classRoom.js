const express = require('express');
const router = express.Router();
const ffcsData = require('../data/all_data.json');

router.get('/search/:type/:keyword', (req, res) => {

    const searchField = req.params.type.toUpperCase();
    const keyword = req.params.keyword.trim().toLowerCase();

    try {
        const filteredData = [];

        for(let i=0; i<ffcsData.length; i++){
            if(ffcsData[i][searchField].toLowerCase().indexOf(keyword) >= 0){
                filteredData.push(Object.assign({}, ffcsData[i], {id: i}));
            }
        }

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