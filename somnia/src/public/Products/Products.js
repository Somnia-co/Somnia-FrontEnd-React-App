import hoodie1 from "../../images/clothes/hoodies/adfrontHOODIE.png";
import hoodie2 from "../../images/clothes/hoodies/profrontHOODIE.png";
import hat1 from "../../images/clothes/hats/baseball.png";
import hat2 from "../../images/clothes/hats/half.png";
import crewneck1 from "../../images/clothes/crewnecks/softback.png";
import crewneck2 from "../../images/clothes/crewnecks/softfront.png";
import tee1 from "../../images/clothes/tees/adfront.png";
import tee2 from "../../images/clothes/tees/refront.png";

//we will get all products here, it's for Products option in main menu
//export keyword is for being able to export it in different pieces of code
export function GetProducts() {
  //we have to fill those arrays, the pattern is: {name: 'bla', img:'dsa', id:12}
  //image in base64String

  let hoodies = [
    {
      name: "hoodie1",
      img: {hoodie1}
    },
    {
      name: "hoodie2",
      img: {hoodie2}
    },
  ];

  let hats = [
    {
      name: "hat1",
      img: {hat1}
    },
    {
      name: "hat2",
      img: {hat2}
    },
  ];

  let crewnecks = [
    {
      name: "crewneck1",
      img: {crewneck1}
    },
    {
      name: "crewneck2",
      img: {crewneck2}
    },
  ];

  let tees = [
    {
      name: "tee1",
      img: {tee1}
    },
    { 
      name: "tee2",
      img: {tee2}
    }
  ];

  return [
    { products: hoodies , type: "hoodies" },
    { products: hats, type: "hats" },
    { products: crewnecks, type: "crewnecks" },
    { products: tees, type: "tees" },
  ];
}
