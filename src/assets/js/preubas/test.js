document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        if (e.key === "Escape") e.target.value = ""

        document.querySelectorAll(".articulo").forEach(prog => {

            prog.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? prog.classList.remove("filtro")
                : prog.classList.add("filtro");
        })

    }

})

document.addEventListener("keyup", f => {

    if (f.target.matches("#buscador")) {

        if (f.key === "Escape") f.target.value = ""

        document.querySelectorAll(".par").forEach(master => {

            master.textContent.toLowerCase().includes(f.target.value.toLowerCase())
                ? master.classList.remove("filtrador")
                : master.classList.add("filtrador")
        })

    }

})