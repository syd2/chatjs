const username = sessionStorage.getItem("nom")
if (!username){
    window.location.href = "http://127.0.0.1:5500/id.html"
}

const msg = document.getElementById("send-msg")
const btn = document.getElementById("btn")
const msg_list = document.getElementById("messages")
const nom_form = document.getElementById("name")

const socket = io("http://localhost:3000")
nom_form.value = username
nom_form.disabled = true;

socket.emit("new-user", username)

socket.on("user-joined", (user_name) =>{
    const joined = document.createElement("li")
    joined.className = "message"
    joined.innerText = `${user_name} joined`
    msg_list.appendChild(joined)
})

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    appendMsg(msg.value, "you")
    socket.emit("msg", {"msg" : msg.value, "nom" : username })
    msg.value = ""

})

socket.on("message", ({mes, nom}) =>{
    console.log(mes)
    appendMsg(mes, nom)
})
    
function appendMsg(mes, nom){
    const new_msg = document.createElement("li")
    new_msg.className = "message"
    new_msg.innerText = `${new Date().toDateString()} : ${nom} -  ${mes}`
    console.log(new_msg)
    msg_list.appendChild(new_msg)
}