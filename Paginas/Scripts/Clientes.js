jQuery(function () {
    llenartabla();

});
function llenartabla() {
    llenartablaxservicios("http://localhost:50132/api/Cliente/listar", "#tblinfoclient");
}
class cliente {
    constructor(Nombre, Documento, Telefono, CorreoElectronico, Direccion) {
        this.Nombre = Nombre;
        this.Documento = Documento;
        this.Telefono = Telefono;
        this.CorreoElectronico = CorreoElectronico;
        this.Direccion = Direccion;
    }
}
async function ejecutar(metodo, funcion) {
    let url = "http://localhost:50132/api/Cliente/" + funcion;
    const _cliente = new cliente($("#txtnombre").val(), $("#txtdocumento").val(), 
        $("#txttelefono").val(), $("#txtcorreoelectronico").val(), $("#txtdireccion").val());
    console.log(_cliente);
    await ejecutarservicio(metodo, url, _cliente);
    llenartabla();
}
async function consultar() {
    let codigo = $("#txtdocumento").val();
    let url = "http://localhost:50132/api/Cliente/Get?D=" + codigo;
    const _cliente = await consultarservicio(url);
    console.log(_cliente);
    if (_cliente) {
        $("#txtnombre").val(_cliente.Nombre);
        $("#txtdocumento").val(_cliente.Documento);
        $("#txttelefono").val(_cliente.Telefono);
        $("#txtcorreoelectronico").val(_cliente.CorreoElectronico);
        $("#txtdireccion").val(_cliente.Direccion);
    }
}
