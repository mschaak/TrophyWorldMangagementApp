const express = require('express')
const router = express.Router()
const Order = require('../models/order')
//Get all

//Get on
router.get('/', async (req,res) => {
  try{
    const order = await Order.find()
    res.json(order)
    //res.send("this is working")
  } catch(err) {
    res.status(500).json({message: err.message})
  }

})

router.get('/:id', getOrder, (req,res) => {
  res.json(res.order)

})

router.post('/', async (req,res) => {
  const order = new Order({
    eid: req.body.eid,
    cid: req.body.cid,
    form: req.body.form,
    workflow: req.body.workflow
  })
  console.log(typeof req.body.form)

  try {
    const newOrder = await order.save()
    res.status(201).json(newOrder)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})

router.patch('/:id', getOrder, async (req,res) => {
  if(req.body.eid != null){
    res.order.eid = req.body.eid
  }
  if(req.body.cid != null){
    res.order.cid = req.body.cid
  }
  if(req.body.form != null){
    res.order.form = req.body.form
  }
  if(req.body.workflow != null){
    res.order.workflow = req.body.workflow
  }
  try{
    const updatedOrder = await res.order.save()
    res.status(201).json(updatedOrder)
  } catch (err){
    res.status(400).json({message: err.message})
  }
})

router.delete('/:id', getOrder, async(req,res) => {
  try{
    await res.order.remove()
    res.json("removed order")
  } catch (err) {
      res.status(500).json({message: err.message})
  }

})

async function getOrder(req,res, next) {
  let order
  try{
    order = await Order.findById(req.params.id)
    if (order == null) {
      return res.status(404).json({message: "cannot find order"})
    }
  } catch (err){
    return res.status(500).json({message: err.message})
  }
  res.order = order
  next()
}
module.exports = router
