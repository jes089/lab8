function initMap() {
	// add your code here
	L.mapquest.key = 'SvXoFzF9DRiAeA8sKJ74Rw7TcFtiutM9';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false 
	});

	// Add a marker to the map 
	L.marker([32.88, -117.236]).addTo(map);
}
