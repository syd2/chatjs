const io = require("socket.io")(3000,  { cors: { origin: '*' } })


io.on('connection', (socket) =>{

    socket.on("new-user", (nom) =>{
        socket.broadcast.emit("user-joined", `${nom}`)
    })

    socket.on("msg", ({msg, nom}) =>{
        console.log(msg)
        socket.broadcast.emit('message', {"mes" : msg, "nom" : nom})
    })

})

