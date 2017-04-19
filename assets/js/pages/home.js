import $ from "Config/jquery";

import Loader from "Components/loader";
import ToggleMenu from "Components/toggleMenu";
import Hold from "Components/hold";
import Carousel from "Components/carousel";

new Loader();

$(() => {

    new ToggleMenu();
    new Hold();
    new Carousel();

});