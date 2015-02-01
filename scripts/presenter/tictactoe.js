define('scripts/presenter/tictactoe',

	[	
		'scripts/view/tictactoe',
	], 

	function( TictactoeView ){

		var opts = {
				
		};

		var tictactoePresenter = function(){
			this.initialize();
		};

		tictactoePresenter.prototype = ( function(){

			var initialize = function(){
				tictactoeView = new TictactoeView( this, {} );
			};

			return {
				initialize : initialize,
			}

		} )();

		return tictactoePresenter;
	}
);
