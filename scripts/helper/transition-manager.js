/**
* Singleton helper representing the transition manager
*/
define(
	'scripts/helper/transition-manager',

	function(){
		'use strict';

		var TransitionListener = (function(){

			var transitionsList = {
				'transition'		: 'transitionend',
				'OTransition'		: 'oTransitionend',
				'MSTransition'		: 'msTransitionEnd',
				'MozTransition'		: 'transitionend',
				'WebkitTransition'	: 'webkitTransitionEnd'
			};

			var whichTransitionEvent = function( element ){
				for( var i in transitionsList){
					if( element.style[ i ] !== undefined ){
						return transitionsList[ i ];
					}
				}
			};

			var onTransitionEndOnce = function( element, callback ){
				var transitionEvent = whichTransitionEvent( element );
				var handleTransitionEnd = function( event ){
					if( event.target === element ){
						element.removeEventListener( transitionEvent, handleTransitionEnd );
						callback( event );
					}
				};
				element.addEventListener( transitionEvent, handleTransitionEnd );
			};

			return {
				onTransitionEndOnce : onTransitionEndOnce
			};

		})();

		return TransitionListener;
	}
);