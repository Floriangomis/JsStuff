define(
	'scripts/helper/utils',
	// Function load at the loading of this JS 
	function(){

		var Utils = (function(){

			/*
			*
			*	EXEMPLE ON EXTEND FUNCTIONNALITY - Allow to Extend a class
			*	
			var Dog = Utils.extend({
				// Constructor of Dog
				initialize : function() {
				  this.numberOfLegs = 4;
				 },
				 // Method of Dog
				bark : function() { console.log("wouf wouf"); }
			});
			var Doberman = Dog.extend({
				// Method of Dog
				growl : function() { console.log("aouwww"); }
			});
			var Labrador = Dog.extend({
				// Method of Dog
				growlLabrador : function() { console.log("Labrador"); }
			});
			var LabradorBebe = Labrador.extend({
				// Method of Dog
				aboiementLabradorBebe : function() { console.log("Labrador bouabouaa"); }
			});
			// Instance of Doberman
			var rufus = new Doberman(); 
			var Labra = new Labrador(); 
			var LabraBebe = new LabradorBebe(); 
			*
			*
			*/
			
			var extend = function( childPrototype ){

				// Defining the base constructor for all class. 
				var Class = function() {
					// Here if initialize method exist, then execute it.
					this.initialize && this.initialize.apply(this, arguments);
				};

				Class.extend = function( childPrototype ) { // defining a static method 'extend'
					var parent = this;
					var child = function() { // the child constructor is a call to its parent's
						return parent.apply( this, arguments );
					};
					
					child.extend = parent.extend; // adding the extend method to the child class
					var Surrogate = function() {}; // surrogate "trick" as seen previously
					Surrogate.prototype = parent.prototype;
					child.prototype = new Surrogate;
					for(var key in childPrototype){
						child.prototype[key] = childPrototype[key];
					}
					return child; // returning the child class
				};

				return Class.extend( childPrototype );
			};

			

			//////////////////
			// Public Method//
			//////////////////
			return {
				extend : extend
			};

		})();

		// At the end we return this object which contain the public Method.
		return Utils;
	}
);

