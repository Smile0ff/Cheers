const LOAD_TIME = 2000; //specified in common css(#loader-holder)

class Loader{

    constructor(){
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