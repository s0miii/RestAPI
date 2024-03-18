const express = require('express');
const router = express.Router();

const EmployeeInformation = require('../Model/Employee.model');

// Post Employee
router.post('/', async (req, res, next) =>{
    try {
        const employee = new EmployeeInformation(req.body);
        const result = await employee.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

// Get All
router.get('/', async (req, res, next) =>{
    try{
        const result = await EmployeeInformation.find( {} , {__v: 0});
        res.send(result);
    } catch (erroor) {
        res.send(error.message);
    }
});

// Get employee by id
router.get('/:id', async (req, res, next) =>{
    const id = req.params.id;
    try {
        const result = await EmployeeInformation.findById(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Patch employee by ID
router.patch('/:id', async (req, res, next) =>{
    try {
        const id = req.params.id;
        const update = req.body;
        const result = await EmployeeInformation.findByIdAndUpdate(id, update);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

//Delete employee by ID
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await EmployeeInformation.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;