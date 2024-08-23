function simularAPI(exito) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("La operación fue exitosa");
      } else {
        reject("Hubo un error en la operación");
      }
    }, 2000);
  });
}

simularAPI(true)
  .then((mensaje) => {
    console.log(mensaje); 
  })
  .catch((error) => {
    console.error(error); 
  });

simularAPI(false)
  .then((mensaje) => {
    console.log(mensaje); 
  })
  .catch((error) => {
    console.error(error); 
  });
