angular.module("crudCustomer").config(function($routeProvider,$locationProvider) {
	
	$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
	});
	
	$routeProvider.when("/customers", {
		templateUrl : 'view/cutomers.html',
		controller : "customerController",
		/*resolve: {
			customers: function(customersAPI) {
				return customersAPI.getCustomers();
			}
		}*/
	
	}).when("/newcustomer", {
		templateUrl : 'view/newCustomer.html',
		controller : "newCustomerController",
	
	}).when("/customerdetail/:id", {
		templateUrl : 'view/customerDetail.html',
		controller : "customerDetailController"
	
	}).otherwise({
		redirectTo : '/customers'
	});
	
	
});