function initMap(){

    // Map options
    var options = {
        zoom:11,
        center:{lat:-23.533773,lng:-46.625290}
    }

    // new map
    var map = new google.maps.Map(document.getElementById('map'), options);


    // add marker
    var marker = new google.maps.Marker({
        position:{lat:-23.615309180052073,lng:-46.69429045282163},
        map:map
    });
}