angular.module("crudCustomer").directive("uiDate", function(){
	return{
		require: "ngModel",
		link: function(scope, element, attrs, crtl){
			
			/**
			 * Function que formata data para formato dd/MM/yyyy
			 */
			var _fomartDate = function(date){
				
				date = date.replace(/[^0-9]+/g,"");
				
				if(date.length>2){
					date = date.substring(0,2) +"/"+date.substring(2);
				}
				
				if(date.length>5){
					date = date.substring(0,5) + "/"+date.substring(5,9);
				}
				
				return date;
			};
			
			element.bind("keyup", function(){
				crtl.$setViewValue(_fomartDate(crtl.$viewValue));
				crtl.$render();
			});
		}
		
	};
});