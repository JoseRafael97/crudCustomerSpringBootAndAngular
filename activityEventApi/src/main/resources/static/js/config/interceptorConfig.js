angular.module("crudCustomer").config(function($httpProvider){
	$httpProvider.interceptors.push("timestampinteceptor");
});