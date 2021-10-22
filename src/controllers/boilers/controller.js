const mongoose = require('mongoose');
const boilerSchema = require('../../models/Boiler');
const boilerTypeSchema = require('../../models/BoilerType');

const indexBoilers = async (req,res) =>{
    try{
        const boiler = await boilerSchema.find().populate('BoilerType');
        return res.status(200).json(boiler);
        }
    catch(error){
        return res.status(400).json({
            error: true,
            message: error,
        })
    }
}
const indexBoilerType = async (req,res) =>{
    try{
        const Btype = await boilerTypeSchema.find()
        return res.status(200).json(Btype);
        }
    catch(error){
        return res.status(400).json({
            error: true,
            message: error,
        })
    }
}


const addBoilerType = async (req,res) =>{
    try {
        const BoilerType = new boilerTypeSchema ({
            boilerType_id : req.body._id,
            description: req.body.description
        })
        const Btype= await BoilerType.save();
        return res.status(201).json({
            data : {boilerType_id : Btype._id,
                    description : Btype.description},
            error: false
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error,
        })
    }
}

const addBoiler = async (req,res) =>{
    try {
        const Boiler = new boilerSchema ({
            operating_pressure: req.body.operating_pressure,
            capacity:  req.body.capacity,
            trademark: req.body.trademark,
            boilerType : req.body.BoilerType
        });
        const newBoiler = await Boiler.save();
        const response = await newBoiler.populate('BoilerType')
        return res.status(201).json({
            data: response,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            error: error,
            message: error,
        })
    }
}


const getBoilerById = async(req,res) => {
    try {
        const response = await boilerSchema.findOne({_id : req.params._id})
        return res.status(200).json({
            data: response,
            error: false,
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error,
        })
    }
}

const deleteBoiler = async(req,res)=> {
    try {
        const response = await Boiler.findByIdAndDelete({_id : req.params._id})
        return res.status(200).json({
            message: 'Boiler Deleted succesfull',
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message : error,
        })
    }
}

const editBoiler = async (req,res) => {
    try {
        const Boiler = {
            operating_pressure: req.body.operating_pressure,
            capacity:  req.body.capacity,
            trademark: req.body.trademark,
            boilerType : req.body.BoilerType
        };
        const response = await uSchema.findOneAndUpdate({_id : req.params._id},Boiler,{new : true})
        return res.status(200).json({
            data : response,
            error : false,
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message : error,
        })
    }
}

module.exports ={
    indexBoilers,
    indexBoilerType,
    addBoilerType,
    addBoiler,
    editBoiler,
    deleteBoiler,
    getBoilerById,
}