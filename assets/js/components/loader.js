const LOAD_TIME = 2000;

class Loader{

    constructor(options = {}){
        this.el = $("#page");

        this._events();
    }
    _events(){
        $(window).on("load", (e) => this.loaded(e));
    }
    loaded(e){
        setTimeout(() => {
            this.el.addClass("__loaded");
        }, LOAD_TIME);
    }

}

export default Loader;