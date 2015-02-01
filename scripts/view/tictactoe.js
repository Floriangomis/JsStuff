define('scripts/view/tictactoe', function(){
		
		var opts = {
				canvasId : 'board',
		}

		var tictactoeViewer = function( presenter, attrs ){
			this.initialize( presenter, attrs );
		}

		tictactoeViewer.prototype = ( function(){

			var initialize = function( presenter, attrs ){

				canvas = document.querySelector( '#' + opts.canvasId );
				context = canvas.getContext('2d');
				gameBoard = {
					dimension : {
						width : canvas.width,
						height : canvas.height
					},
					position : {
						x : canvas.left,
						y : canvas.top
					},
				};

				attachPresenter.call( this, presenter );
				paintGameBoard.call( this );

			};

			var paintGameBoard = function(){

				context.beginPath();
				// Style of line draw
				context.strokeStyle = '#000';
				context.lineWidth   = 3;

				// Draw position
				context.moveTo( gameBoard.dimension.width / 3, 0 );
				context.lineTo( gameBoard.dimension.width / 3,  gameBoard.dimension.height );

				context.moveTo( (gameBoard.dimension.width / 3) * 2, 0 );
				context.lineTo( (gameBoard.dimension.width / 3) * 2,  gameBoard.dimension.height );

				context.moveTo( 0, gameBoard.dimension.height / 3 );
				context.lineTo( gameBoard.dimension.width,  gameBoard.dimension.height / 3 );

				context.moveTo( 0, (gameBoard.dimension.height / 3) * 2 );
				context.lineTo( gameBoard.dimension.width, (gameBoard.dimension.height / 3) * 2 );


				// Fill
				context.stroke();
				context.closePath();
			};

			var attachPresenter = function( presenter ){
				this.presenter = presenter;
				console.log( this );
			};

			var handleClick = function(){
				this.presenter.handleTurnPlay.call( this );
			};

			var bindClick = function(){
				clickHandler = handleClick.bind( this );
				canvas.addEventListener( 'click', clickHandler );
			};

			return {
				initialize : initialize,
			}

		} )();

		return tictactoeViewer;

});
