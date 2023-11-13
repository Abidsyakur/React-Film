const express = require('express');
const router = express.Router();
const connection = require('../config/db');
const { body , validationResult } = require('express-validator');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM pesan order by id_pesan desc', (err,rows) => {
        if(err){
            return res.status(500).json({
                status:false,
                message:'server failed',
                error:err
            });
        } else {
            return res.status(200).json({
                status:true,
                message:'data pesan',
                data:rows
            });
        }
    });
});


//store 






//get by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM pesan WHERE id_pesan = ? ' , id, (err, rows ) => {
        if(err){
            return res.status(500).json({
                status:false,
                message:'server error'
            });
        } if (rows.length <= 0 ){
            return res.status(404).json({
                status:false,
                message:'not found'
            });

        } else {
            return res.status(200).json({
                status:true,
                message:'data pesan',
                data:rows[0]
            });
        }
    });
});
