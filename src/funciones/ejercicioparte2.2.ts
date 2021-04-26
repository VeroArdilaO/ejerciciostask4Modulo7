
//EJERCICIO 2
export async function getResult6(result:Function){
  try {
    const resultado = await result;
    console.log(resultado);
  }catch (error){
    console.log(error);
  }
}

