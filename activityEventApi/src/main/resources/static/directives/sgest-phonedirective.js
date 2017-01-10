angular.module("crudCustomer").directive("uiPhone", function(){
	return{
		require: "ngModel",
		link: function(scope, element, attrs, crtl){
			
		
			var _fomartPhone = function(phone){

				phone = phone.replace(/[^0-9]+/g,"");

				if(phone.length> 2 ){
					phone = "("+phone.substring(0,2) +") "+phone.substring(2);
				}
			
				if(phone.length>9){
					
					phone = phone.substring(0,9)+"-"+phone.substring(9,14);
				}
	
				
				return phone;
			};
			
			
			element.bind("keyup", function(){
				crtl.$setViewValue(_fomartPhone(crtl.$viewValue));
				crtl.$render();
			});
			
			crtl.$parsers.push(function(value){
				if(value.length === 15){
					return value;
				}
			})
		}
		
	};
});