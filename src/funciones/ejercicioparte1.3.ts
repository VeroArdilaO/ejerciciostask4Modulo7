// EJERCICIO 3

const myPromise =  new Promise((success, reject) => {
  setTimeout(() => {
    success(1)
  }, 1000)
})

export async function getResult3() {
  const result: any = await myPromise
 
  const result2 = result + 2

  return result2
}

