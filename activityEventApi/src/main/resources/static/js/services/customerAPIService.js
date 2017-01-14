angular.module("crudCustomer").factory("customersAPI", function($http, config){
	
	var _getCustomers =  function(){
		return $http.get(config.baseUrl+"/customer");
	}
	
	var _getCustomer =  function(id){
		return $http({method: "GET", url:config.baseUrl+"/customer/"+id});
	}
	
	var _createCustomer =  function(customer){
		return $http.post(config.baseUrl+ "/customer", customer);
	}
	
	var _deleteCustomer =  function(id){
		
		return $http.delete(config.baseUrl+ "/customer/"+id);
		
	}

	
	return {
		getCustomers : _getCustomers,
		getCustomer : _getCustomer,
		createCustomer : _createCustomer,
		deleteCustomer :_deleteCustomer
		

	};
});