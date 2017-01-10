angular.module("crudCustomer").directive("uiCpf", function(){
	return{
		require: "ngModel",
		link: function(scope, element, attrs, crtl){
			
		
			var _fomartCpf = function(phone){
				
				cpf = cpf.replace(/[^0-9]+/g,"");

				if(cpf.length> 3 ){
					cpf = cpf.substring(0,3)+"." + cpf.substring(3);
				}
			
				if(cpf.length>7){
					
					cpf = cpf.substring(0,7)+"."+cpf.substring(7);
				}
	
				if(cpf.length>11){
					
					cpf = cpf.substring(0,11)+"."+cpf.substring(11);
				}
				
				return cpf;
			};
			
			
			element.bind("keyup", function(){
				crtl.$setViewValue(_fomartCpf(crtl.$viewValue));
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