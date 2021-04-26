//EJERCICIO 2
const myPromise = new Promise((success, reject) => {
  setTimeout(() => {
    success(1);
  }, 1000);
});

export async function getResult2() {
  const result: any = await myPromise;

  const result2 = result + 2;

  console.log("Results:", result2); // log: 'Result: 3'
}


