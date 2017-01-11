angular.module("crudCustomer").controller("customerDetailController",function($scope, $routeParams, customer) {

	$scope.customer = customer.data;

			
});
