angular.module("crudCustomer").config(function($routeProvider,$locationProvider) {
	
	$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
	});
	
	$routeProvider.when("/customers", {
		templateUrl : 'view/cutomers.html',
		controller : "customerController",
	}).when("/newcustomer", {
		templateUrl : 'view/newCustomer.html',
		controller : "customerController"
	});
	
	
});