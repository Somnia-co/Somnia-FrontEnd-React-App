//we will get all products here, it's for Products option in main menu
//export keyword is for being able to export it in different pieces of code
import hoodie1_webp from "../../images/Products/WEBP/adfrontHOODIE.webp";
import hoodie1_jpg from "../../images/Products/JPG/adfrontHOODIE.jpg";
import hoodie2_webp from "../../images/Products/WEBP/adbackHOODIE.webp";
import hoodie2_jpg from "../../images/Products/JPG/adbackHOODIE.jpg";

import hat1_webp from "../../images/Products/WEBP/baseball.webp";
import hat1_jpg from "../../images/Products/JPG/baseball.jpg";
import hat2_webp from "../../images/Products/WEBP/half.webp";
import hat2_jpg from "../../images/Products/JPG/half.jpg";

import crewneck1_webp from "../../images/Products/WEBP/softfront.webp";
import crewneck1_jpg from "../../images/Products/JPG/softfront.jpg";
import crewneck2_webp from "../../images/Products/WEBP/softback.webp";
import crewneck2_jpg from "../../images/Products/JPG/softback.jpg";

export function GetProducts() {
  //we have to fill those arrays, the pattern is: {name: 'bla', img:'dsa', id:12}
  //image in base64String

  let hoodies = [
    {
      name: "hoodie1",
      webp: hoodie1_webp,
      img: hoodie1_jpg,
    },
    {
      name: "hoodie2",
      webp: hoodie2_webp,
      img: hoodie2_jpg,
    },
  ];

  let hats = [
    {
      name: "hat1",
      webp: hat1_webp,
      img: hat1_jpg,
    },
    {
      name: "hat2",
      webp: hat2_webp,
      img: hat2_jpg,
    },
  ];

  let crewnecks = [
    {
      name: "crewneck1",
      webp: crewneck1_webp,
      img: crewneck1_jpg,
    },
    {
      name: "crewneck2",
      webp: crewneck2_webp,
      img: crewneck2_jpg,
    },
  ];

  let tees = [
    {
      name: "tee1",
      webp: "../../images/Products/WEBP/adback.webp",
      img: "",
    },
    {
      name: "tee2",
      webp: "../../images/Products/WEBP/adback.webp",
      img: "",
    },
  ];

  return [
    { products: hoodies, type: "hoodies" },
    { products: hats, type: "hats" },
    { products: crewnecks, type: "crewnecks" },
    { products: tees, type: "tees" },
  ];
}
