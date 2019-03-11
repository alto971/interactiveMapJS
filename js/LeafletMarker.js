
class LeafletMarker {

    constructor(infos,mymap) {
        this.map = mymap;
        this.infos = infos;
        this.button = null;
        this.popUp = null;

        //custom Icons
        var simplonIcon = L.icon({
            iconUrl: 'images/logoSimplon.png',
            //shadowUrl: 'logoSimplon.png',
        
            iconSize:     [38, 38], // size of the icon
            shadowSize:   [38, 38], // size of the shadow
            //iconAnchor:   [7, 7], // point of the icon which will correspond to marker's location
            iconAnchor:   [19, 5], 
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [13, -10]//[-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        //add the marker
        this.marker = L.marker([this.infos.lat, this.infos.long], {icon: simplonIcon}).addTo(this.map);
        this.marker.on('click', this.onMarkerClick.bind(this));

    }

    //called when click on one marker !!
    onMarkerClick(){
        //prepare pop up HTML
        let content = '<h4>Fabrique de '+this.infos.fabriqueName+'</h4>'+
                    'Formation en cours : '+this.infos.formationName+
                    '<p class="btnPopUp center">'+
                     '<a id="btn-infos" class="btn btn-simplon btn-lg" href="#" role="button">Voir</a>'+
                    '</p>'
        //add a little pop-up
        //let popup 
        this.popUp = L.popup({
            //offset: L.point(0, 2000),
            closeButton : false//[38, 38]
         })
        .setLatLng([this.infos.lat, this.infos.long])
        .setContent(content)
        .openOn(this.map);

        //add listener on button
        this.button = document.getElementById('btn-infos');
        this.button.addEventListener("click",this.onSelectMarker.bind(this),false, false);
    }

    onSelectMarker(e){
        console.log("click sur bouton !!" + this.infos.lat);
        e.preventDefault();
        //fire event to EventBus
        EventBus.dispatch(EventBus.onMarkerSelected,this,this.infos);

         //block bubble phase
        this.button.removeEventListener("click",this.onSelectMarker);
        this.map.closePopup();
    }

}