import {getResult} from './funciones/ejercicioparte1.1';
import {getResult2} from './funciones/ejercicioparte1.2';
import {getResult3} from './funciones/ejercicioparte1.3';
import {getResult4} from './funciones/ejercicioparte1.4';
import {getResult5} from './funciones/ejercicioparte2.1';
import {getResult6} from './funciones/ejercicioparte2.2';

const myPromise: any = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(1)
    } else {
      reject('An error has occurred')
    }
  }, 500)
})

getResult();
getResult2();
getResult3().then((result:number) => {
    console.log('Result:', result) // log: 'Result: 3'
  })
getResult4();
getResult5();
getResult6(myPromise);