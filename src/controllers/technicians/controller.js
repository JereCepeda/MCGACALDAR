const mongoose = require('mongoose')
const techSchema = require('../../models/Tecnico')

const getAllTech = async (req, res) => {
    try{
        const tech = await techSchema.find();
        res.status(200).json(tech);
    }
    catch(error){
        res.status(400).json(error)
    }
}

const getTechById = async (req, res) => {
    try{
        const tech = await techSchema.findById({_id : req.params._id});
        res.status(200).json(tech);
    }
    catch(error){
        res.status(404).json(error)
    }
}

const postTech = async (req, res) => {
    try{
        const tech = new techSchema ({
            certified_boiler : req.body.certified_boiler,
        });
        const newTech = await tech.save()
        res.status(201).json(newTech)
    }
    catch(error){
        res.status(400).json(error)
    }
}

const editTech = async (req, res) => {
    try{
        const tech = {
            certified_boiler : req.body.certified_boiler,
        };
        const editedTech = await techSchema.findByIdAndUpdate({_id: req.params._id}, tech, {new: true})
        res.status(200).json(editedTech)
    }
    catch(error){
        res.status(400).json(error)
    }
}

const deleteTech = async (req, res) => {
    try{
        const tech = await techSchema.findByIdAndDelete({_id : req.params._id})
        res.status(200).json(tech);
    }
    catch(error){
        res.status(400).json(error);
    }
}

module.exports = {
    getAllTech,
    getTechById,
    postTech,
    editTech,
    deleteTech,
}