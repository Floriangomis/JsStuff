define(
	'scripts/presenter/audio-player',

	function(){

		var audioPlayer = (function(){
			this.audioPlayer;

			var init = function(){

			};

			var audioPlayerPlay = function(){
				thisaudioPlayer.play();
			};

			var audioPlayerPause = function(){
				thisaudioPlayer.pause();
			};

			return {
				init : init	
			};

		})();

		return audioPlayer;

	}

);