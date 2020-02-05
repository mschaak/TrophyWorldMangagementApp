const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
//Get all

//Get on
router.get('/', async (req,res) => {
  try{
    const customer = await Customer.find()
    res.json(customer)
    //res.send("this is working")
  } catch(err) {
    res.status(500).json({message: err.message})
  }

})

router.get('/:id', getCustomer, (req,res) => {
  res.json(res.customer)

})

router.post('/', async (req,res) => {
  const customer = new Customer({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    phonenumber: req.body.phonenumber
  })
  try {
    const newCustomer = await customer.save()
    res.status(201).json(newCustomer)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})

router.patch('/:id', getCustomer, async (req,res) => {
  if(req.body.email != null){
    res.customer.email = req.body.email
  }
  if(req.body.username != null){
    res.customer.username = req.body.username
  }
  if(req.body.password != null){
    res.customer.password = req.body.password
  }
  if(req.body.phonenumber != null){
    res.customer.phonenumber = req.body.phonenumber
  }
  try{
    const updatedCustomer = await res.customer.save()
    res.status(201).json(updatedCustomer)
  } catch (err){
    res.status(400).json({message: err.message})
  }
})

router.delete('/:id', getCustomer, async(req,res) => {
  try{
    await res.customer.remove()
    res.json("removed Customer")
  } catch (err) {
      res.status(500).json({message: err.message})
  }

})

async function getCustomer(req,res, next) {
  let customer
  try{
    customer = await Customer.findById(req.params.id)
    if (customer == null) {
      return res.status(404).json({message: "cannot find Customer"})
    }
  } catch (err){
    return res.status(500).json({message: err.message})
  }
  res.customer = customer
  next()
}
module.exports = router
