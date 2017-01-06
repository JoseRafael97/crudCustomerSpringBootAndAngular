angular.module("crudCustomer").filter("name", function(){
	return function(input){
		var listNames = input.split(" ")
		var formatedNamesList = listNames.map(function(name){
			return name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
		});
		return formatedNamesList.join(" ");
	}
});
