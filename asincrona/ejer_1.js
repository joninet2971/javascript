const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      let exito = true; // Cambia a false para ver el manejo de errores
  
      if (exito) {
        resolve("¡Se resolvió la promesa!");
      } else {
        reject("Hubo un error en la promesa.");
      }
    }, 3000);
  });
  
  miPromesa
    .then((mensaje) => {
      console.log(mensaje); // Esto se ejecuta si la promesa se resuelve
    })
    .catch((error) => {
      console.error(error); // Esto se ejecuta si la promesa es rechazada
    });