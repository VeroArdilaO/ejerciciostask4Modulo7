
//EJERCICIO 1

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('success')
  }, 500)
})

 export async function getResult5(){
   
   const result = await myPromise;

   console.log("This is a ", result);
}

