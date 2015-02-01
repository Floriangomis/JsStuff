define('scripts/presenter/tictactoe',

	[	
		'scripts/view/tictactoe',
		'scripts/helper/tileset-manager'
	], 

	function( TictactoeView, TileSetManager ){

		var opts = {
			type : 1,
		};

		var moves = [];

		var tictactoePresenter = function(){
			this.initialize();
		};

		tictactoePresenter.prototype = ( function(){

			var initialize = function(){
				tictactoeView = new TictactoeView( this, {} );
			};

			var handleTurnPlay = function(){

			};

			return {
				initialize : initialize,
				handleTurnPlay : handleTurnPlay
			}

		} )();

		return tictactoePresenter;
	}
);
