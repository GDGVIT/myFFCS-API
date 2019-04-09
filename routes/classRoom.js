const express = require('express');
const router = express.Router();
const ffcsData = require('../data/all_data.json');

router.get('/search', (req, res) => {

    try {
        const filteredData = [];
        const searchQueries = req.query;

        for (let i = 0; i < ffcsData.length; i++) {
            let flag = true;
            for (let searchField in searchQueries) {
                if (searchQueries.hasOwnProperty(searchField)) {
                    if (ffcsData[i][searchField.toUpperCase()].toLowerCase().indexOf(searchQueries[searchField].trim().toLowerCase()) < 0) {
                        flag = false;
                        break;
                    }
                }
            }

            if(flag){
                filteredData.push(Object.assign({}, ffcsData[i], {
                    id: i
                }));
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