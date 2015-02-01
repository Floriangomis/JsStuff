require(
	[
		'scripts/helper/transition-manager',
		'scripts/helper/route',
		'scripts/presenter/audio-player',
		'scripts/helper/utils',
		'scripts/presenter/tictactoe',
	], 

	function( TransitionManager, RouteManager, AudioPlayer, Utils, Tictactoe ) {
		
		RouteManager.initRoute();
		
		// Keep it for later
		//AudioPlayer.init();

		// Launch TictacToe
		var tictactoe = new Tictactoe();
} );
