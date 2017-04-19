class ToggleMenu{

    constructor(){
        this.el = $("#toggle-menu");
        this.page = $("#page");

        this._events();
    }
    _events(){
        this.el.on("click", (e) => this.toggle(e));
    }
    toggle(e){
        this.page.toggleClass("menu-opened");
    }

}

export default ToggleMenu;