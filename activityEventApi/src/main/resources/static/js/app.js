angular.module("crudCustomer", ["ngMessages"]);

		angular.module("crudCustomer").controller("customerController", function($scope, $http){
			
			$scope.app = "Lista de Clientes"

			$scope.customers = [];
			
			$scope.loadingCustomers = function(){
				$http({
					method: "GET", 
					url:"http://localhost:8080/customer"})
				.then(function onSuccess(response) {
					$scope.customers = response.data;
					console.log($scope.customer)

				}, function onError(response) {

				});
				
			}

			$scope.loadingCustomers();


			$scope.addCustomer = function(customer){
				customer.dateOfBirth = new Date();
				
				$http({
					method : 'POST',
					url : "http://localhost:8080/customer",
					data : customer

				}).then(function onSucces(response) {
					delete $scope.customer;
					$scope.loadingCustomers();
				}, function onError(response) {
				});

				
			}

			$scope.removeCustomer = function(customers){
				$scope.customers = customers.filter(function(customer){
					if(!customer.selected) return customer;
				});
			}


			$scope.isSelectedCustomer = function(customers){
				return isSelectedCustomer = customers.some(function(customer){
					return customer.selected;
				});

			}

			$scope.orderByCustomers = function(field){
				$scope.orderTo = field;
				$scope.orderDirection = !$scope.orderDirection;
			}

		});
