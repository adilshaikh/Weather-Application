var getUser = (id, callback) =>{
    var user = {
        id,
        name: 'Dranzer'
    }
    setTimeout(()=>{
        callback(user)
    }, 3000)
    
}

getUser(31 , (UserObject) => {
 console.log(UserObject)
})