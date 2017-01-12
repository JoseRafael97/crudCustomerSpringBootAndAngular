angular.module("crudCustomer").config(function($httpProvider){
	$httpProvider.interceptors.push("timestampinterceptor");
	$httpProvider.interceptors.push("errointerceptor");

});