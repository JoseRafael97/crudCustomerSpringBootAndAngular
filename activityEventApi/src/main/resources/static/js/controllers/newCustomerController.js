angular.module("crudCustomer").controller("newCustomerController",function($scope, customersAPI, $location) {

			$scope.addCustomer = function(customer) {
				customersAPI.createCustomer(customer).then(
						function onSucces(response) {
							delete $scope.customer;
							$location.path("/customers");
						}, 
						function onError(response) {
						
						});

			}

			
		});
