const express = require('express');
const router = express.Router();
const connection = require('../config/db');
const { body, validationResult } = require('express-validator');

//get
router.get('/', (req, res) => {
    connection.query('SELECT * FROM film order by id_film desc', (err, rows) => {
        if(err){
            return res.status(500).json({
                status:false,
                message: 'server failed',
                error: err
            });
        } else {
            return res.status(200).json({
                status:true,
                message:'data film',
                data:rows
            });
        }
    });
});

//post
router.post('/store', [
    body('judul').notEmpty(),
    body('genre').notEmpty(),
    body('durasi').notEmpty(),
    body('tanggal_rilis').notEmpty(),
    body('harga_tiket').notEmpty(),
    body('gambar').notEmpty()
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(422).json({
            error:error.array()
        });
    }
    const data = {
        judul : req.body.judul,
        genre : req.body.genre,
        durasi : req.body.durasi,
        tanggal_rilis : req.body.tanggal_rilis,
        harga_tiket : req.body.harga_tiket,
        gambar : req.body.gambar,
    };
    connection.query('INSERT INTO film SET ? ', data, function (err, rows){
        if(err){
            return res.status(500).json({
                status:false,
                message:'server failed',
                error:err
            });
        } else {
            return res.status(201).json({
                status:true,
                message:'succes',
                data: rows[0]
            });
        }
    })
});


//get by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM film WHERE id_film = ? ', id, (err, rows) =>{
        if(err){
            return res.status(500).json({
                status:false,
                message:'server failed'
            });
        } else {
            return res.status(200).json({
                status:true,
                message:'data film',
                data:rows[0]
            });
        }
    });
})


//update by id
router.patch('/update/:id', [
    body('judul').notEmpty(),
    body('genre').notEmpty(),
    body('durasi').notEmpty(),
    body('tanggal_rilis').notEmpty(),
    body('harga_tiket').notEmpty(),
    body('gambar').notEmpty(),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        });
    }
    const id = req.params.id;
    const { judul, genre, durasi, tanggal_rilis, harga_tiket, gambar } = req.body;
    const data = {
        judul, 
        genre,
        durasi,
        tanggal_rilis,
        harga_tiket,
        gambar
    };
    connection.query('UPDATE film SET ? WHERE id_film = ? ', [data, id], (err) => {
        if(err){
            return res.status(500).json({
                status:false,
                message:'server eror',
                error:err
            });
        } else {
            return res.status(200).json({
                status:true,
                message:'update'
            });
        }
    });
});

//delete by id
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM film WHERE id_film = ? ', id, (err) => {
        if(err){
            return res.status(500).json({
                status:false,
                message:'server eror',
                error:err
            });
        } else {
            return res.status(200).json({
                status:true,
                message:'data di hapus'
            });
        }
    });
});

module.exports = router;