

const callApi = async () => {
    const response = await fetch("/api/")
    const data = await response.json()
    return data
}

const menu = () => {
    const ul = document.querySelector("#links")
    let HTML = "";
    ["Lunes",
     "Martes",
     "Miercoles",
     "Jueves",
     "Viernes"].forEach(el => {
        HTML += `<li class="mx-3"><a href="${"MenuSemanalGalansGrills" + el + ".html"}" class="text-decoration-none text-white">${"Menu " + el}</a></li>`
     })
    ul.innerHTML = HTML;
}

const createHTML = async () => {
    const data = await callApi()
    const table = document.querySelector("#data-table")
    console.log(data);
    let HTML = "";
    data.forEach(el => {
        HTML += `
        <tr>
            <th scope="row">${el.id}</th>
            <td>${el.nombre}</td>
            <td>${el.estado}</td>
            <td><button id="button-${el.id}" class="btn btn-danger">Toggle</button></td>
        </tr>
        `
    })

    table.innerHTML = HTML
    const buttons = table.querySelectorAll("button")
    buttons.forEach(el => {
        el.addEventListener("click", (e) => {
            fetch("/api/" + e.target.id.match(/\d+/)[0],
            {
                method: "PUT"
            })
            createHTML()
        })
    })
}
 
menu()
createHTML()