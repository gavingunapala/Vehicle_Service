const mongoose = require('mongoose');
const schema = mongoose.Schema;

const VehicleServiceschema = new schema({
    service_requirements: {
        type: [String],
        required: true
      },
      vehicle_type: {
        type: String,
        required: true
      },
      expected_delivery_date: {
        type: Date,
        required: true
      },
      owner_information: {
        name: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          required: true
        }
      },
      total_price: {
        type: Number,
        required: true,
        default: 0
      }
})

// table and path
const VehicleService = mongoose.model("vehicleService",VehicleServiceschema);


//must export this file.
module.exports = VehicleService;