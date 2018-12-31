var newPromise = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }else {
                reject('Arguments should be numbers only!')
            }
        }, 2000)
        
    })
};

newPromise(2,3).then((result)=>{
    console.log('Result:',result);
    return newPromise(result, 10)
}).then((res)=>{
    console.log('Result after chaining:', res);
}).catch((errorMessage)=>{
    console.log(errorMessage)
})

// var somePromise = new  Promise((resolve, reject) => {
//     setTimeout(()=>{
//         //resolve('Hey! it Worked.')
//         reject('Unable to fetch promise')
//     }, 3000)
// })

// somePromise.then((message)=>{   //then is promise method
// console.log('Success:', message)
// }, (errorMessage)=>{
//     console.log('Error: ', errorMessage)
// })