//we will get all products here, it's for Products option in main menu
//export keyword is for being able to export it in different pieces of code
import hoodie1 from '../../images/somniapics_small/adfrontHOODIE.jpg'
import hoodie2 from '../../images/somniapics_small/adbackHOODIE.jpg'
import hat1 from '../../images/somniapics_small/baseball.jpg';
import hat2 from '../../images/somniapics_small/half.jpg';
import crewneck1 from '../../images/somniapics_small/softfront.jpg';
import crewneck2 from '../../images/somniapics_small/softback.jpg';

export function GetProducts() {
  //we have to fill those arrays, the pattern is: {name: 'bla', img:'dsa', id:12}
  //image in base64String

  let hoodies = [
    {
      name: "hoodie1",
      img: hoodie1,
    },
    {
      name: "hoodie2",
      img: hoodie2,
    },
  ];

  let hats = [
    {
      name: "hat1",
      img: hat1,
    },
    {
      name: "hat2",
      img: hat2,
    },
  ];

  let crewnecks = [
    {
      name: "crewneck1",
      img: crewneck1,
    },
    {
      name: "crewneck2",
      img: crewneck2,
    },
  ];

  let pants = [
    { 
      name: 'pants1',
      img: '.src/pants/pants1.jpg'
    },
    { 
      name: 'pants2',
      img: '.src/pants/pants2.jpg'
    }
  ];

  let tees = [
    {
      name: 'tee1',
      img: '.src/tee/tee1.jpg'
    },
    { 
      name: 'tee2',
      img: '.src/tee/tee2.jpg'
    }
  ];

  return [
    { products: hoodies , type: "hoodies" },
    { products: hats, type: "hats" },
    { products: crewnecks, type: "crewnecks" }
  ];
}
