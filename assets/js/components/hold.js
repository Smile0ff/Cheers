const HOLD_TIME = 2500;
const LEFT_MOUSE_BUTTON_KEY = 1;

class Hold{

    constructor(){
        this.el = $("#intro-hold");
        this.page = $("#page");
        this.closeButton = $("#hold-close");
        this.isPressed = false;
        this.isActive = false;
        this.timeout = null;

        this._events();
    }
    _events(){
        this.el
            .on("mousedown", (e) => this.handleMouseDown(e))
            .on("mouseup mouseleave", (e) => this.handleMouseUp(e));

        this.closeButton.on("click", (e) => this.handleClose(e));
    }
    handleMouseDown(e){
        if(e.which !== LEFT_MOUSE_BUTTON_KEY) return;

        this.isPressed = true;

        this.page.addClass("holding-start");

        this.timeout = setTimeout(() => {
            this.isActive = true;
            this.page.removeClass("holding-start").addClass("holding-active");
        }, HOLD_TIME);

        return false;
    }
    handleMouseUp(e){
        if(!this.isPressed) return;

        this.page.removeClass("holding-start");

        clearTimeout(this.timeout);

        return false;
    }
    handleClose(e){
        if(!this.isActive) return;

        this.page.removeClass("holding-active");
    }

}

export default Hold;