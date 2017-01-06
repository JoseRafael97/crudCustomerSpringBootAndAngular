angular.module("crudCustomer").factory("customersAPI", function($http, config){
	
	var _getCustomers =  function(){
		return $http({method: "GET", url:config.baseUrl+"/customer"});
	}
	
	var _createCustomer =  function(customer){
		return $http.post(config.baseUrl+ "/customer", customer);
	}
	
	var _deleteCustomer =  function(id){
		
		return $http.delete(config.baseUrl+ "/customer/"+id);
		
	}

	
	return {
		getCustomers : _getCustomers,
		createCustomer : _createCustomer,
		deleteCustomer :_deleteCustomer

	};
});