console.log(`Selamat datang~`);
setTimeout(() => {
    console.log(`Terima kasih sudah mampir, silahkan datang kembali!`);
}, 3000)

console.log(`Ada yang bisa dibantu?`)

// Callback Pattern
function getUsers(callback) {
//     Simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];

        if (isOffline){
            callback(new  Error(`cannot retrieve users due offline`), null)
            return
        }

        callback(null, users)
    }, 3000);
}

function usersCallback(error, users) {
    if (error){
        console.log(`process failed:`, error.message)
        return
    }

    console.log(`process success: `, users)
}
//
// getUsers((users) => {
//     console.log(users)
// })

getUsers(false, usersCallback);
getUsers(true, usersCallback)
