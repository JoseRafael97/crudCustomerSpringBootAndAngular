angular.module("crudCustomer").controller(
		"customerController",
		function($scope, $http, customersAPI) {

			$scope.app = "Lista de Clientes"

			$scope.customers = [];

			$scope.loadingCustomers = function() {
				customersAPI.getCustomers().then(function onSuccess(response) {
					$scope.customers = response.data;
					console.log($scope.customer)

				}, function onError(response) {

				});

			}

			$scope.loadingCustomers();

			$scope.addCustomer = function(customer) {
				customer.dateOfBirth = new Date();

				customersAPI.createCustomer(customer).then(
						function onSucces(response) {
							delete $scope.customer;
							$scope.loadingCustomers();
						}, function onError(response) {
						});

			}

			$scope.removeCustomer = function(customers) {
				customers.filter(function(customer) {
					if (customer.selected){
						
						customersAPI.deleteCustomer(customer.id).then(function onSucces(response) {
							$scope.loadingCustomers();
						
						}, function onError(response) {
						
						});
					}
				});
			}

			$scope.isSelectedCustomer = function(customers) {
				return isSelectedCustomer = customers.some(function(customer) {
					return customer.selected;
				});

			}

			$scope.orderByCustomers = function(field) {
				$scope.orderTo = field;
				$scope.orderDirection = !$scope.orderDirection;
			}

		});
