//we will get all products here, it's for Products option in main menu
//export keyword is for being able to export it in different pieces of code
export function GetProducts() {
  //we have to fill those arrays, the pattern is: {name: 'bla', img:'dsa', id:12}
  //image in base64String

  let hoodies = [];
  let hats = [];
  let crewnecks = [];
  let pants = [];
  let tees = [];

  return [
    { products: [{ hoodies }], type: "hoodies" },
    { products: [{ hats }], type: "hats" },
    { products: [{ crewnecks }], type: "crewnecks" },
    { products: [{ pants }], type: "pants" },
    { products: [{ tees }], type: "tees" },
  ];
}
