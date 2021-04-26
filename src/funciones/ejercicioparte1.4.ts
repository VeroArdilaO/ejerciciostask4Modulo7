const myPromise =  new Promise((success, reject) => {
    setTimeout(() => {
      reject('error!')
    }, 1000)
  })
  
  export async function getResult4() {
    try {
      const result = await myPromise 
      console.log(result)
    } catch(err) {
      console.error(err)
    }
  }
  
