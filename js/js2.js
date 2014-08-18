
(function(){//wrap your javascript in a closure, a good habit
	

	var app = angular.module('customerManager', []);

	//by convention controller names are always capital case
	//controllers take an anon func, this gets eecuted when the controller is called
	app.controller('ManagerController', function(){

		//product is a property of the controller
		this.customers = customers;	
		this.states = states;

	});//end ManagerController


//handles adding new customers
	app.controller('CustomerController', function(){
		this.customer = {};//create new dict to hold new customer info

		this.addCustomer = function(){
			customers.push(this.customer);//add new customer info to customers list
			this.customer = {};//clear out the customer obj
		};
	});//end CustomerController


//handles the updates and deletes 
	app.controller('EditorController', function(){
		this.customer = {};//create new dict to hold new customer info

		this.deleteCustomer = function(customerID){
			console.log("delete: "+customerID); //DEBUG

			customers.splice(customerID, 1);
		}

		this.updateCustomer = function(customerID){
			console.log("update: "+customerID);//DEBUG			
			console.log(customers[customerID].name + " " + customerID.email)
			$('#addBtn-custfrm').hide();
			$('#saveBtn-custfrm').show();
			

			$('#nameInp-custfrm').val(customers[customerID].name);
			$('#emailInp-custfrm').val(customers[customerID].email);
			$('#phoneInp-custfrm').val(customers[customerID].phone);
			$('#streetInp-custfrm').val(customers[customerID].street);
			$('#cityInp-custfrm').val(customers[customerID].city);
			$('#stateInp-custfrm').val(customers[customerID].state);
			$('#zipInp-custfrm').val(customers[customerID].zip);

			$('#saveBtn-custfrm').click(function(){
				$('#saveBtn-custfrm').hide();
				$('#addBtn-custfrm').show();
			});
		}

	});//end CustomerController


//data objects
	var customers = [
				{
					name: 'Shelby Testerson',
					email: 'example@email.com',
					phone: '4016034859',
					street: '87 Pivot St',
					city: 'Providence',
					state: 'RI',
					zip: '014879'
				},
				{
					name: 'Rachelle McTest',
					email: 'mtest@email.com',
					phone: '4016034859',
					street: '5413 Summer Ave',
					city: 'Cranston',
					state: 'RI',
					zip: '014879'
				}
	];

	var states = [
				    { name: 'ALABAMA', abbreviation: 'AL'},
				    { name: 'ALASKA', abbreviation: 'AK'},
				    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
				    { name: 'ARIZONA', abbreviation: 'AZ'},
				    { name: 'ARKANSAS', abbreviation: 'AR'},
				    { name: 'CALIFORNIA', abbreviation: 'CA'},
				    { name: 'COLORADO', abbreviation: 'CO'},
				    { name: 'CONNECTICUT', abbreviation: 'CT'},
				    { name: 'DELAWARE', abbreviation: 'DE'},
				    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
				    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
				    { name: 'FLORIDA', abbreviation: 'FL'},
				    { name: 'GEORGIA', abbreviation: 'GA'},
				    { name: 'GUAM', abbreviation: 'GU'},
				    { name: 'HAWAII', abbreviation: 'HI'},
				    { name: 'IDAHO', abbreviation: 'ID'},
				    { name: 'ILLINOIS', abbreviation: 'IL'},
				    { name: 'INDIANA', abbreviation: 'IN'},
				    { name: 'IOWA', abbreviation: 'IA'},
				    { name: 'KANSAS', abbreviation: 'KS'},
				    { name: 'KENTUCKY', abbreviation: 'KY'},
				    { name: 'LOUISIANA', abbreviation: 'LA'},
				    { name: 'MAINE', abbreviation: 'ME'},
				    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
				    { name: 'MARYLAND', abbreviation: 'MD'},
				    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
				    { name: 'MICHIGAN', abbreviation: 'MI'},
				    { name: 'MINNESOTA', abbreviation: 'MN'},
				    { name: 'MISSISSIPPI', abbreviation: 'MS'},
				    { name: 'MISSOURI', abbreviation: 'MO'},
				    { name: 'MONTANA', abbreviation: 'MT'},
				    { name: 'NEBRASKA', abbreviation: 'NE'},
				    { name: 'NEVADA', abbreviation: 'NV'},
				    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
				    { name: 'NEW JERSEY', abbreviation: 'NJ'},
				    { name: 'NEW MEXICO', abbreviation: 'NM'},
				    { name: 'NEW YORK', abbreviation: 'NY'},
				    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
				    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
				    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
				    { name: 'OHIO', abbreviation: 'OH'},
				    { name: 'OKLAHOMA', abbreviation: 'OK'},
				    { name: 'OREGON', abbreviation: 'OR'},
				    { name: 'PALAU', abbreviation: 'PW'},
				    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
				    { name: 'PUERTO RICO', abbreviation: 'PR'},
				    { name: 'RHODE ISLAND', abbreviation: 'RI'},
				    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
				    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
				    { name: 'TENNESSEE', abbreviation: 'TN'},
				    { name: 'TEXAS', abbreviation: 'TX'},
				    { name: 'UTAH', abbreviation: 'UT'},
				    { name: 'VERMONT', abbreviation: 'VT'},
				    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
				    { name: 'VIRGINIA', abbreviation: 'VA'},
				    { name: 'WASHINGTON', abbreviation: 'WA'},
				    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
				    { name: 'WISCONSIN', abbreviation: 'WI'},
				    { name: 'WYOMING', abbreviation: 'WY' }
	];

})();//end closure


