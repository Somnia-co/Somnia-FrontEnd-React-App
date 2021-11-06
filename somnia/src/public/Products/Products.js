//we will get all products here, it's for Products option in main menu
//export keyword is for being able to export it in different pieces of code
export function GetProducts() {
  //we have to fill those arrays, the pattern is: {name: 'bla', img:'dsa', id:12}
  //image in base64String

  let hoodies = [
    {
      name: "hoodie1",
      img: ".src/hoodies/hoodie1.jpg",
    },
    {
      name: "hoodie2",
      img: ".src/hoodies/hoodie2.jpg",
    },
  ];

  let hats = [
    {
      name: "hat1",
      img: ".src/hats/hat1.jpg",
    },
    {
      name: "hat2",
      img: ".src/hats/hat2.jpg",
    },
  ];

  let crewnecks = [
    {
      name: "crewneck1",
      img: ".src/crewnecks/crewneck1.jpg",
    },
    {
      name: "crewneck2",
      img: ".src/crewnecks/crewneck2.jpg",
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
    { products: crewnecks, type: "crewnecks" },
    { products: pants, type: "pants" },
    { products: tees, type: "tees" },
  ];
}
