define('scripts/view/tictactoe', function(){
		
		var opts = {
				canvasId : 'board',
				sourceX : '',
				sourceY : ''
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
				bindClick.call( this );

			};

			var paintGameBoard = function(){
				context.beginPath();
				// Style of line draw
				context.strokeStyle = '#000';
				context.lineWidth   = 3;
				// Draw position
				// Horizontal line
				context.moveTo( gameBoard.dimension.width / 3, 0 );
				context.lineTo( gameBoard.dimension.width / 3,  gameBoard.dimension.height );
				context.moveTo( (gameBoard.dimension.width / 3) * 2, 0 );
				context.lineTo( (gameBoard.dimension.width / 3) * 2,  gameBoard.dimension.height );
				// Vertical line
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
			};

			var handleClick = function( event ){
				var caseX, caseY;
				caseX = Math.floor( ( event.pageX - canvas.offsetLeft ) / ( gameBoard.dimension.width / 3 ) );
				caseY = Math.floor( ( event.pageY - canvas.offsetTop ) / ( gameBoard.dimension.height / 3 ) );
				this.presenter.handleTurnPlay.call( this, caseX, caseY );
			};

			var bindClick = function(){
				clickHandler = handleClick.bind( this );
				canvas.addEventListener( 'click', clickHandler );
			};

			var drawImage = function( image, xSource, ySource, widthImage, heightImageSource, xDestinationSource, yDestination, widthImageFinal, widthHeightFinal ){
				context.drawImage( image, xSource, ySource, widthImage, heightImageSource, xDestinationSource, yDestination, widthImageFinal, widthHeightFinal );
			};

			var getGameBoardDimension = function(){
				return gameBoard;
			};

			return {
				initialize : initialize,
				drawImage : drawImage,
				getGameBoardDimension : getGameBoardDimension,
			}

		} )();

		return tictactoeViewer;

});
