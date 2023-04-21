Project Name: garage service

#backend api for garage to accepts vehicle service

Project Description
	backend api for a garage to accepts vehicle service requests

Installation
	To install Todo List App, follow these steps:
		Clone this repository to your local machine.
		Install the required dependencies using npm install.
		Start the application using npm start or npm run dev.


URL for the service - http://localhost:8070/
	

test data 
	
	Add data
		URL - http://localhost:8070/Service/add
		data - {
    				"service_requirements": ["vacuum", "tyres", "fullservice"],
   				 "vehicle_type": "lorry",
   				 "expected_delivery_date": "2023-04-21",
   				 "owner_information": {
      			  "name": "kamal",
      			  "email": "kamal@gmail.com",
      			  "phone": "1234567890"
    				}
			}
			
	Get all data
		URL - http://localhost:8070/Service/
		data - 
	
	Get one service by id 
		URL - http://localhost:8070/Service/get/:id
		data - 

	Delete service
		URL - http://localhost:8070/Service/delete/:id

	Update data
		URL - http://localhost:8070/Service/updateOne/:id
		data - {
    
   				"vehicle_type": "van",
    				"owner_information": {
       			"name": "saman kumara"
      
    				}
			}
		data - {
    
   				"service_requirements": ["vacuum", "fullservice"]
			}