// EJERCICIO 1
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success");
  }, 850);
});

export async function getResult() {
  const result = await myPromise;

  console.log("Result:", result); // log: 'Result: Success'
}
