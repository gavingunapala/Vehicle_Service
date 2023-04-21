const router = require("express").Router();
const { request } = require("express");

//import model class
let Service = require("../Models/VehicleService");

//this is the price list
const prices = {
  battery: 500,
  tyres: 200,
  vacuum: 1500,
  fullservice: 2000,
};

// //add data to service table
// //Post request
// //http://localhost:8070/service/add
router.route("/add").post((req, res) => {

  const service_requirements = req.body.service_requirements;
  const vehicle_type = req.body.vehicle_type;
  const expected_delivery_date = req.body.expected_delivery_date;
  const owner_information = req.body.owner_information;

  // Calculate total price
  const total_price = service_requirements.reduce((total, requirement) => {
    return total + prices[requirement];
  }, 0);

  const service = new Service({
    service_requirements,
    vehicle_type,
    expected_delivery_date,
    owner_information,
    total_price
  });

  service.save().then(() => {
    res.json("Service Vehicle Added")
  }).catch((err) => {
    console.log(err);
  })
})



//get all service vehicle info
//http://localhost:8070/Service/
//Get Request
router.route("/").get((req, res) => {
  Service.find().then((service) => {
    res.json(service)
  }).catch((err) => {
    console.log(err)
  })
})



//get one service vehicle info by id
//http://localhost:8070/Service/get/:id
//find one of the Service info by id
router.route("/get/:id").get((req, res) => {
  let id = req.params.id;
  Service.findById(id).then((service) => {
    res.json(service)
  }).catch((err) => {
    console.log(err);
  })
})


//delete service vehicle info by id
//http://localhost:8070/Service/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res) => {
  let SVId = req.params.id;

  await Service.findByIdAndDelete(SVId).then(() => {
    res.status(200).send({ status: "Service Vehicle deleted" });
  }).catch((err) => {
    console.log(err);
  })
})



//update service vehicle info by id
//http://localhost:8070/Service/updateOne/:id
//update Request
router.route("/updateOne/:id").put(async (req, res) => {
  let serviceVehicle = await Service.findById(req.params.id);
 
  //save service_requirements whether the service request comeing from the request object or not
  let service_requirements = req.body.service_requirements || serviceVehicle.service_requirements;
 
  // Calculate total price
  const total_price = service_requirements.reduce((total, requirement) => {
    return total + prices[requirement];
  }, 0);
  // console.log(total_price)
  
// check data edited or not if edited update data other wise same data  
  const data = {
    service_requirements: req.body.service_requirements || serviceVehicle.service_requirements,
    vehicle_type: req.body.vehicle_type || serviceVehicle.vehicle_type,
    expected_delivery_date: req.body.expected_delivery_date || serviceVehicle.expected_delivery_date,
    owner_information: req.body.owner_information || serviceVehicle.owner_information,
    total_price : total_price,
  };
  
  serviceVehicle = await Service.findByIdAndUpdate(req.params.id, data, { new: true });
  res.json(serviceVehicle);
});


module.exports = router;