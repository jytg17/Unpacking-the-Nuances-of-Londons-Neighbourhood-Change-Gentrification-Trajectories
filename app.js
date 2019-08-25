	var mymap = L.map('mapid', {
	smoothZoom: true,
	smoothZoomDelay: 1000 //Default to 1000
	}).setView([51.505, -0.09], 10), ;

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoianl0ZzE3IiwiYSI6ImNqemprenBwODBhMWczZ285d2Y2ZnA2N2YifQ.fcKMxXo7qBXJh8N_Q876_w', {
		maxZoom: 18,
		attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.light'
	}).addTo(mymap);
