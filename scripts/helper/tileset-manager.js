/**
* Singleton helper representing the transition manager
*/
define(
	'scripts/helper/tileset-manager',

	function(){
		'use strict';

		var TileSetManager = ( function(){
			
			var image = new Image();
			
			var handleOnload = function() {
				if( !image.complete ) {
					throw new Error("Erreur de chargement du tileset nommé " + imgUrl + ".");
				}
				if( image.complete ){
					image.removeEventListener( 'onload', handlerOnLoad );
				}

			}

			var handlerOnLoad = handleOnload.bind( this );
			var loadImage = function( imgUrl ){
				// Chargement de l'image dans l'attribut image
				image.addEventListener( 'onload' , handlerOnLoad.call( this ) );
				image.src = imgUrl;
			};

			var getImage = function(){
				return image;
			};
			

			return {
				getImage : getImage,
				loadImage : loadImage,
			};

		} )();

		return TileSetManager;
	}
);