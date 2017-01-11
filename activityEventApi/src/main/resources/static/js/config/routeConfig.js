angular.module("crudCustomer").config(function($routeProvider,$locationProvider) {
	
	
	
	$routeProvider.when("/customerdetail/:id", {
		templateUrl : 'view/customerDetail.html',
		controller : "customerDetailController",
		resolve: {
			customer: function(customersAPI, $route) {
				return customersAPI.getCustomer($route.current.params.id);
		}
	}
	
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
	
	}).otherwise({
		redirectTo : '/customers'
	});
	
	
	
	
});