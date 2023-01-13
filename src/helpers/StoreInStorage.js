
//Método genérnico para guardar elementos en LocalStorage - recibe la clave (nombre del Local)
//y recibe el elemento a guardar.

export const storeInStorage = (key, element) => {
    
    //Conseguir los elementos que ya tenemos en LocalStorage
    let items = JSON.parse(localStorage.getItem(key));
    //Compruebo si items es un array - si tiene algo?
    if (Array.isArray(items)) {
      //Si es array agrego la peli nueva
      items.push(element)

    }else{
      //Si no es array creo uno con la peli nueva
      items = [element];
    };
    //Guardado en LocalStorage - *No olvidar el stringify (local solo guarda n° o strings)
    localStorage.setItem(key, JSON.stringify(items));

    return element
  };