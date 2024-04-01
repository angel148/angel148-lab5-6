/*(() => {

  
    NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  

  //lista de emails de usuarios de Meta-X
  const l: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(l);

  //Lista de compras de un carrito
  const var2: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(var2);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const fff = (asdfg: number): number => {
    return asdfg + 3;
  }

  console.log(fff(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capi(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }

  console.log(capi("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let www: boolean = false;

  if(www) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let c: boolean = true;

  if(c) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const sudo: number = (1 + 2 + 3) / 3;

  console.log(sudo);
  
  //variable que almacena el valor de PI
  let pizza: number = 3.141592654;

  console.log(pizza);
  

  //variabel que controla si un archivo es modificable 
  let Bv: boolean = false;

  if(Bv) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const eioua: number = 2.718281828; 


})();

*/

(() => {

  // Lista de emails de usuarios de Meta-X
  const userEmails: Array<string> = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(userEmails);

  // Lista de compras de un carrito
  const cartItems: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(cartItems);
  

  // Función para sumar más 3 a un número y retornarlo
  const addThree = (num: number): number => {
    return num + 3;
  }

  console.log(addThree(2));
  
  
  // Función para capitalizar una palabra pasada por parámetro
  function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

  console.log(capitalize("capricorn"));
  
  // Variable que alerta en caso de que algún evento suceda
  let eventOccurred: boolean = false;

  if(eventOccurred) console.log('event');

  // Variable que se encarga de verificar si un usuario puede acceder o no
  let canAccess: boolean = true;

  if(canAccess) console.log('welcome');
  

  // Variable para hallar el promedio de 3 números
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  
  // Variable que almacena el valor de PI
  const piValue: number = 3.141592654;

  console.log(piValue);
  

  // Variable que controla si un archivo es modificable 
  let isEditable: boolean = false;

  if(isEditable) console.log('edit this file?');
  
  // Variable para almacenar el valor de e
  const eValue: number = 2.718281828; 

})();
