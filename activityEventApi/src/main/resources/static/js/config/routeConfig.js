/**
 * 
 * Config routes in aplication 
 */
angular.module("crudCustomer").config(function($routeProvider,$locationProvider) {
	
	$routeProvider.when("/customerdetail/:id", {
		templateUrl : 'view/customerDetail.html',
		controller : "customerDetailController",
		
		resolve: {
			customer: function(customersAPI, $route) {
				return customersAPI.getCustomer($route.current.params.id);
		}
	
	}
	
	}).when("/customers", {
		templateUrl : 'view/cutomers.html',
		controller : "listCustomersController",
		
	}).when("/newcustomer", {
		templateUrl : 'view/newCustomer.html',
		controller : "newCustomerController",
	
	}).when("/error", {
		templateUrl : 'view/error.html',
	
	}).otherwise({
		redirectTo : '/customers'
	});

	
});