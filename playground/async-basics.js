console.log('Starting App')

setTimeout(() => {
    console.log('Inside CallBack function')
}, 2000);

setTimeout(()=>{
    console.log('Inside second call  back function')
}, 0)

console.log('Finishing App')