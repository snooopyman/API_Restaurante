setInterval(async () => {
    const textos = document.querySelectorAll("h1")
    const data = await (await fetch("/api/")).json()

    textos.forEach(el => {
        data.find(plato => el.id == plato.id).estado == "Activo" ? el.classList.add("color-red") : el.classList.remove("color-red")
    })
}, 30000)