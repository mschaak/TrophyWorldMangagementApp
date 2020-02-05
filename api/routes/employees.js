const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')
//Get all

//Get on
router.get('/', async (req,res) => {
  try{
    const employee = await Employee.find()
    res.json(employee)
    //res.send("this is working")
  } catch(err) {
    res.status(500).json({message: err.message})
  }

})

router.get('/:id', getEmployee, (req,res) => {
  res.json(res.employee)

})

router.post('/', async (req,res) => {
  const employee = new Employee({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    admin: req.body.admin,
    master: req.body.master
  })
  try {
    const newEmployee = await employee.save()
    res.status(201).json(newEmployee)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})

router.patch('/:id', getEmployee, async (req,res) => {
  if(req.body.email != null){
    res.employee.email = req.body.email
  }
  if(req.body.username != null){
    res.employee.username = req.body.username
  }
  if(req.body.password != null){
    res.employee.password = req.body.password
  }
  if(req.body.admin != null){
    res.employee.admin = req.body.admin
  }
  if(req.body.master != null){
    res.employee.master = req.body.master
  }
  try{
    const updatedEmployee = await res.employee.save()
    res.status(201).json(updatedEmployee)
  } catch (err){
    res.status(400).json({message: err.message})
  }
})

router.delete('/:id', getEmployee, async(req,res) => {
  try{
    await res.employee.remove()
    res.json("removed employee")
  } catch (err) {
      res.status(500).json({message: err.message})
  }

})

async function getEmployee(req,res, next) {
  let employee
  try{
    employee = await Employee.findById(req.params.id)
    if (employee == null) {
      return res.status(404).json({message: "cannot find employee"})
    }
  } catch (err){
    return res.status(500).json({message: err.message})
  }
  res.employee = employee
  next()
}
module.exports = router
