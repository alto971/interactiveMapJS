
class DatasManager {

    constructor(url,map2 = null) {
        this.urlPromise = url;
        this.datas = "";
        this.isDatasLoaded = false;
        this.onPromiseCalled();

    }

    onPromiseCalled(callback = null) {
        
        const fetchPromise = fetch(this.urlPromise);
        const parsePromise = fetchPromise.then(fetchResult => {
           return fetchResult.text();
        });

        parsePromise.then(jsonResult => {
            this.isDatasLoaded = true;
            this.datas = JSON.parse(jsonResult);
            console.log("PROMISE ENDED with success ==> datas depuis datasManager : "+this.datas);
            EventBus.dispatch(EventBus.onDatasAvailable,this,this.datas);
        });

        fetchPromise.catch(fetchError => {
            console.log("Une erreur a eu lieu pendant la requête", fetchError);
        });

        parsePromise.catch(parseError => {
            console.log("Une erreur a eu lieu pendant le parsing", parseError);
        });
    }
}