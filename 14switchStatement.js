
//This is syntax of 
// switch (expression) {
//     case value1:
//       // code to be executed if expression == value1
//       break;
//     case value2:
//       // code to be executed if expression == value2
//       break;
//     ...
//     default:
//       // code to be executed if expression does not match any of the values
//   }
  

let x = "Ali"
switch (x) {
    case "Ashpak" : 
        console.log(" name is ali");
        break;
    case "Ali" :
        console.log("name is aftab");
        break;

    default:
        console.log( "Non of Those");
        break;
}

let  y = "apple"
switch (y) {
    case "Banana":
        console.log();
        break;
    case "Kevy":
        console.log();
        break;
    case "Carrot":
        console.log();
        break;

    default: 
        console.log("Your Data is not found");
        break;
}