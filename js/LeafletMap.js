
/*
This assume you have prepard HMTL/PHP page with css and js leaflet files
see more at : https://leafletjs.com/examples/quick-start/
Create access token at : https://www.mapbox.com/account/access-tokens

you must have a container like a <div> with an ID you'll pass to this object at creation
*/

class LeafletMap {

    constructor(latitude, longitude, zoom = 17,  datas = null, ID = "mapid", isSymfony = false) {

        this.accessToken = "pk.eyJ1IjoiZ3dhZGFsZGVzaWduIiwiYSI6ImNqbGltcXh3cDAydXQzdm14cHJiNGs0aXIifQ.KNvsGgqyQgZJvYps6REW-A";

        this.latitude = latitude;
        this.longitude = longitude;
        //use PARENT to ensure event will be catch from EventBus
         document.addEventListener('onDatasAvailable',  (e) => {
            this.onDatasAvailable(e.detail.infos);
          });
        
        /****  create leaflet map ***/
        this.mymap = L.map(ID).setView([this.latitude, this.longitude], zoom);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 17,
            id: 'mapbox.streets',
            accessToken: this.accessToken
        }).addTo(this.mymap);

        //add layer to the map
        if(isSymfony){
            //get the token from twig
            let mapBoxToken = document.querySelector('.mapBoxToken');
            this.accessToken = mapBoxToken.dataset.isMaptoken;
        }
        else{
            console.log("not SF !!");
        }
        
        this.mymap.on('click', () => {
            this.onMapClick();
          });

    }
    onMapClick(e) {
        this.mymap.closePopup();
    }
    
    onMarkerClick(){
        alert("ok");
    }

    onPopUpClick() {
        let url = 'http://www.google.com/maps/place/' + this.latitude + ',' + this.longitude;
        let inAppBrowser = this.mapsSelector(url);
    }

    mapsSelector(url) {
        if /* if we're on iOS, open in Apple Maps */
                ((navigator.platform.indexOf("iPhone") != -1) ||
                        (navigator.platform.indexOf("iPad") != -1) ||
                        (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
        else /* else use Google */
            //window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
            window.open(url, '_blank', 'location=yes');
    }

    onDatasAvailable(datas){
        console.log("callback in MAP "+datas);

        //add the markers
        if(datas !== null && datas !== undefined){
            //console.log(datas);

            for (let i = 0 ; i < datas.length; i++) {
                //console.log("Fabrique de :" +datas[i].fabriqueName+ " en GPS : "+datas[i].lat);
                let markerWrapper = new LeafletMarker(datas[i],this.mymap);
            }
        }
        else{
            console.log("ERROR : pas de data !");
        }
    }

}