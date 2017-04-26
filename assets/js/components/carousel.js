import getVendor from "Utility/getVendor";

const ARROW_UP = 38;
const ARROW_DOWN = 40;

const transition = getVendor("transition");
const transform = getVendor("transform");

class Carousel{

    constructor(){
        this.el = $("#carousel");
        this.holder = this.el.find(".carousel");
        this.items = this.el.find(".carousel-item");
        this.itemsCount = this.items.length;

        this.counterHolder = $("#carousel-counter");
        this.counterItems = this.counterHolder.find(".counter-item");

        this.arrowsHolder = $("#carousel-arrows");
        this.arrows = this.arrowsHolder.find(".arrow");

        this.dimension = {};
        this.offset = {};
        this.isDown = false;
        this.threshold = 0;
        this.coords = {};
        this.direction = {};
        this.current = 0;

        this.setDimension();
        this.setThreshold();
        this.setOffset();
        this.setHolderHeight();
        this.setItemHeight();

        this.setActiveSlide();
        this.setActiveCounterNumber();

        this._events();
    }
    setDimension(){
        this.dimension.w = window.innerWidth;
        this.dimension.h = window.innerHeight;
    }
    setThreshold(){
        this.threshold = this.dimension.h / 4;
    }
    setOffset(){
        this.offset = this.el.offset();
    }
    setHolderHeight(){
        this.holder.css({
            height: this.dimension.h * this.itemsCount
        });
    }
    setItemHeight(){
        this.items.css({
            height: this.dimension.h
        });
    }
    _events(){
        this.el
            .on("mousedown", (e) => this.mouseDown(e))
            .on("mousemove", (e) => this.mouseMove(e))
            .on("mouseup mouseleave", (e) => this.mouseUp(e))
            .on("click", ".arrow", (e) => this.arrowClick(e));

        $(document).on("keydown", (e) => this.keyDown(e));
        $(window).on("resize", (e) => this.resize(e));
    }
    mouseDown(e){
        this.isDown = true;

        this.coords.sx = e.pageX - this.offset.left;
        this.coords.sy = e.pageY - this.offset.top;

        return false;
    }
    mouseMove(e){
        if(!this.isDown) return;

        this.coords.dx = (e.pageX - this.offset.left) - this.coords.sx;
        this.coords.dy = (e.pageY - this.offset.top) - this.coords.sy;

        this.direction.left = (this.coords.dx <= 0) ? true : false;
        this.direction.top = (this.coords.dy <= 0) ? true : false;

        let positionY = this.getCurrentPosition() + this.coords.dy;

        this.slide(positionY, false);

        return false;
    }
    mouseUp(e){
        if(!this.isDown) return;

        this.isDown = false;

        if(this.direction.top && (Math.abs(this.coords.dy) >= this.threshold)) this.current++;
        if(!this.direction.top && (Math.abs(this.coords.dy) >= this.threshold)) this.current--;

        this.setBoundaries();

        let positionY = this.getCurrentPosition();

        this.slide(positionY, true);

        this.setActiveSlide();
        this.setActiveCounterNumber();

        return false;
    }
    keyDown(e){
        let keyCode = e.originalEvent.which;

        if((keyCode !== ARROW_UP) && (keyCode !== ARROW_DOWN)) return;

        if(keyCode === ARROW_UP) this.current--;
        if(keyCode === ARROW_DOWN) this.current++;

        this.setBoundaries();

        let positionY = this.getCurrentPosition();

        this.slide(positionY, true);

        this.setActiveSlide();
        this.setActiveCounterNumber();

        return false;
    }
    arrowClick(e){
        let target = $(e.currentTarget);

        this.direction.top = target.hasClass("arrow-top") ? true : false;

        if(this.direction.top) this.current--;
        if(!this.direction.top) this.current++;

        this.setBoundaries();

        let positionY = this.getCurrentPosition();
        
        this.slide(positionY, true);

        this.setActiveSlide();
        this.setActiveCounterNumber();

        return false;
    }
    resize(e){
        this.setDimension();
        this.setThreshold();
        this.setOffset();
        this.setHolderHeight();
        this.setItemHeight();

        let positionY = this.getCurrentPosition();

        this.slide(positionY);
        
        return false;
    }
    setBoundaries(){
        if(this.current <= 0) this.current = 0;
        if(this.current >= this.itemsCount - 1) this.current = this.itemsCount - 1;
    }
    getCurrentPosition(){
        return this.current * this.dimension.h * -1;
    }
    setActiveSlide(){
        this.items.removeClass("active").eq(this.current).addClass("active");
    }
    setActiveCounterNumber(){
        this.counterItems.removeClass("active").eq(this.current).addClass("active");
    }
    slide(y, transition){
        this.holder.css({
            transform: "translateY("+ y +"px)",
            transition: transition ? "transform .5s cubic-bezier(0.6, 0.01, 0.44, 0.98)" : "none"
        });
    }
}

export default Carousel;