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
				TileSetManager.loadImage( 'assets/assetsXO.jpg' );
			};

			var handleTurnPlay = function( x, y ){
				checkCaseIsEmpty.call( this, x, y );
			};

			var checkCaseIsEmpty = function( x, y ){

				var isTick = false;
				for( i in moves ){
					if( moves[ i ][ 0 ] == x && moves[ i ][ 1 ] == y ){
						isTick = true;
					}
				}
				if( !isTick ){
					moves[ moves.lenght ] = moves.push( [ x, y, opts.type ] );
					drawPicture.call( this, x, y );

					// Check if a winner

					if( opts.type == 1 ){
						opts.type = 2
					} else{
						opts.type = 1;
					}
				}else{
					alert( 'Already Tick !' );
				}

				// TODO : Remove once no need anymore
				console.table( moves );
			};

			drawPicture = function( x, y ){
				var image = TileSetManager.getImage();
				var xSourceEnTiles = opts.type % image.width;
				if(xSourceEnTiles == 0){
					xSourceEnTiles = image.width
				};
				var ySourceEnTiles = Math.ceil( opts.type / image.width );

				var xSource = (xSourceEnTiles - 1) * 285;
				var ySource = (ySourceEnTiles - 1) * 285;

				tictactoeView.render( 	image,
										xSource, ySource,
										285, 285,
										x * ( tictactoeView.getGameBoardDimension().dimension.width / 3 ), y * ( tictactoeView.getGameBoardDimension().dimension.height / 3 ),
										164, 164	);
		}

			return {
				initialize : initialize,
				handleTurnPlay : handleTurnPlay,
			}

		} )();

		return tictactoePresenter;
	}
);
