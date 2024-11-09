async function ejecutarservicio(metodo, url, objeto) {
    try {
        const resultado = await fetch(url, {
            method: metodo,
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(objeto)
        });
        const respuesta = await resultado.json();
        $("#dvMensaje").html(respuesta);
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}

async function consultarservicio(url) {
    try {
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "application/json"}
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
async function llenarcomboxservicios(urlservicio, combollenar, ID, nombre) {
    try {
        const respuesta = await fetch(urlservicio,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const rpta = await respuesta.json();
        $(combollenar).empty();
        for (i = 0; i < rpta.length; i++) {
            $(combollenar).append('<option value=' + rpta[i][ID] + '>' + rpta[i][nombre] +
                '</option>')
        }
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}
async function llenartablaxservicios(urlservicio, combollenar) {
    try {
        const respuesta = await fetch(urlservicio,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const rpta = await respuesta.json();
        var columnas = [];
        nombrecolumnas = Object.keys(rpta[0]);
        for (var i in nombrecolumnas) {
            columnas.push({
                data: nombrecolumnas[i],
                title: nombrecolumnas[i],
            });
        }
        $(combollenar).DataTable({
            data: rpta,
            columns: columnas,
            destroy: true
        });
    }
    catch (error) {
        $("#dvMensaje").html(error);
    }
}

