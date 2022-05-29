
const form = document.getElementById("form")
const n = document.getElementById("id")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    if (n.value.replace(/\s+/g, "") != "" ){
        sessionStorage.setItem("nom", n.value)
        window.location.href = "http://127.0.0.1:5500/index.html"
    }else{
        alert("you need to enter a name to chat.")
    }

})