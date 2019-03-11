class EventBus {

    constructor(domElemt) {

        this.domElemt = domElemt;
        this.event = null;

    }
    static dispatch(eventName, target, datas = null) {
        if(datas != null){
            this.infos = datas;
        }
        this.domElemt = document.getElementById('masthead');
        this.setEvent(eventName);
        this.domElemt.dispatchEvent(this.event);
    }

    static setEvent(eventName){
        this.event = new CustomEvent(eventName,{
            detail:{
              infos:this.infos
            },
            bubbles: true,
            cancelable: true //if the event.preventDefault() should work.
        });
    }

    static get onMarkerSelected() { return 'onMarkerSelected'; }
    static get onDatasAvailable() { return 'onDatasAvailable'; }
}