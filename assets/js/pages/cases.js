import $ from "@config/jquery";

import Loader from "@components/loader";
import ToggleMenu from "@components/toggleMenu";

new Loader();

$(() => {

    new ToggleMenu();

});