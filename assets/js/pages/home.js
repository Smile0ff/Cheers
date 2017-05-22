import $ from "@config/jquery";

import Loader from "@components/loader";
import ToggleMenu from "@components/toggleMenu";
import Hold from "@components/hold";
import Carousel from "@components/carousel";

new Loader();

$(() => {

    new ToggleMenu();
    new Hold();
    new Carousel();

});