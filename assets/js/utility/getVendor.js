export default function getVendor(property){
    let el = document.createElement("div"),
        style = el.style,
        vendors = ["ms", "O", "Moz", "Webkit"];

    if(style[property] === "") return property;

    property = property.charAt(0).toUpperCase() + property.slice(1);

    for(let vendor of vendors){
        if(style[vendor + property] === "") return vendor + property;
    }
}