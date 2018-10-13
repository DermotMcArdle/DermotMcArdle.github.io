
var map; // declares a global map variable

// Start here! initializeMap() is called when page is loaded.
// now done in $(document).ready(function() - modal.js
// Pass the locations
function initializeMap(locals) {

    var mapOptions = {
        disableDefaultUI: true
    };

    //append map to modalText0
    map = new google.maps.Map(document.querySelector('#modalText0'), mapOptions);
    //map = new google.maps.Map($('#modalText0'), mapOptions);

    // Ensure that the map is resized when modalText0 is shown
    // Refer to bootstrap using google maps with modal boxes
    $("#myModal0").on("shown.bs.modal", function(e) {
       google.maps.event.trigger(map, "resize");
       map.fitBounds(mapBounds);
     });

     // creates a Google place search service object. PlacesService does the work of
     // actually searching for location data.
     var service = new google.maps.places.PlacesService(map);

     // Iterates through the array of locations, creates a search object for each location
     locals.forEach( function(place) {
             // the search request object
             var request = {
                 query: place
             };

             // Actually searches the Google Maps API for location data and runs the callback
             // function with the search results after each search.
             service.textSearch(request, callback);
         });

   // Sets the boundaries of the map based on pin locations
   window.mapBounds = new google.maps.LatLngBounds();

   // callback(results, status) makes sure the search returned results for a location.
   // If so, it creates a new map marker for that location.
   function callback(results, status) {
         if (status == google.maps.places.PlacesServiceStatus.OK) {
             createMapMarker(results[0]);
         }
   }

   // createMapMarker(placeData) reads Google Places search results to create map pins.
   // placeData is the object returned from search results containing information
   // about a single location.
   function createMapMarker(placeData) {
        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });
        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
   }
}
