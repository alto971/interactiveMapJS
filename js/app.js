'use strict'

document.addEventListener('DOMContentLoaded', function() {

  let titreFabrique = document.getElementById("titreFabrique");//h2
  var notifier = document.querySelector('h1');//blocInfos
  var notifier2 = document.querySelector('a');//blocInfos

  //for futur IHM update !!
  document.addEventListener(EventBus.onMarkerSelected, function (e) {  
    console.log("TEXTCONTENT recoit evenèenement !!" + e.detail.infos);
    let blocInfos = document.getElementById("blocInfos");
    let htmlToAdd = "<h3>Formation"+e.detail.infos.formationName+"</h3>"+
                    "<i class='fas fa-location-arrow'></i> Adresse : "+e.detail.infos.lieu+
                    "<br>Etat : "+e.detail.infos.status+" / Sélections en cours / Fermée"+
                    "<br>Fin en : Septembre 2019"+
                    "<br><br><h4>Besoins de la fabrique </h4>"+
                    "<br>Les Apprenants.es sont : En stage / Sur un Brief client / Sur un évènement / Sur un Brief Titre"+
                    "<br><br><a class='btn btn-simplon btn-lg' href='tel:'"+e.detail.infos.tel+"role='button'><i class='fas fa-phone'></i> Appelez</a>";
    blocInfos.innerHTML = htmlToAdd;

    titreFabrique.textContent = "Infos sur "+e.detail.infos.fabriqueName;
  });
  
  //not necessary if all dipatch calls use static way !!
  //const eventBus = new EventBus();

  var map = new LeafletMap(43.212161, 2.353663, 7);

  const datasManager = new DatasManager("datas.json",map);//TODO use Event and delete map dependency in DatasManager Class
  
});