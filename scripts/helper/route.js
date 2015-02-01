define('scripts/helper/route',
	[
		'scripts/lib/nunjucks',
		'scripts/lib/crossroads',
	], 

	function( nunjucks, crossroads ){

		// Constructor class
		var routeManager = ( function(){

			var initRoute = function(){
				// Configuration of nunjuck
				nunjucks.configure('views', { watch: true, autoescape: true } );
				// Now we add all the route define in the addRoute Function;
				addRoute();
				addUrlChangeEvent();
			};

			var addUrlChangeEvent = function(){
				// We subscribe to the event HashChange in order to load the good template
				window.addEventListener("hashchange", function() {
					var route = '/';
					var hash = window.location.hash;
					if (hash.length > 0) {
						route = hash.split('#').pop();
					}
					crossroads.parse(route);
				});
				// trigger hashchange on first page load
				window.dispatchEvent(new CustomEvent("hashchange"));
			};

			var addRoute = function(){
				crossroads.addRoute( '/', function(){
					var res = nunjucks.render('base.html', {test : ['main.js', 'audio-player.js']} );
					document.body.innerHTML = res ;
				});
				crossroads.bypassed.add(function(request) {
					var res = nunjucks.render( '404.html', {} );
					document.body.innerHTML = res ;
				});
			};
			
			return {
				initRoute : initRoute
			};

		}() );

		return routeManager;
	}

);