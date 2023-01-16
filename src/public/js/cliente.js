setInterval(async () => {
    try {
        const textos = document.querySelectorAll("h1")
        const data = await (await fetch("/api/")).json()

        textos.forEach(el => {
            data.find(plato => el.id == plato.id).estado == "Inactivo" ? el.classList.add("color-red") : el.classList.remove("color-red")
        })
    } catch (e) {
        console.log(e)
    }
}, 5000)
