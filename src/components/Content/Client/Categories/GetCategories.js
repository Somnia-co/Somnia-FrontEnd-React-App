import hoodies_webp from "../../../../images/Products/WEBP/adfrontHOODIE.webp";
import hats_webp from "../../../../images/Products/WEBP/baseball.webp";
import crewnecks_webp from "../../../../images/Products/WEBP/softfront.webp";

export function GetCategories() {
  // this function should retrieve the categories (as an array or list) with a request to the backend
  return [
    { name: "hoodies", img: hoodies_webp },
    { name: "hats", img: hats_webp },
    { name: "tees", img: hats_webp },
    { name: "crewnecks", img: crewnecks_webp },
  ];
}
