angular.module("crudCustomer").factory("customersAPI", function($http, config){
	
	var _getCustomers =  function(){
		return $http({method: "GET", url:config.baseUrl+"/customer"});
	}
	
	var _createCustomer =  function(customer){
		return $http.post(config.baseUrl+ "/customer", customer);
	}

	
	return {
		getCustomers : _getCustomers,
		createCustomer : _createCustomer

	};
});