jQuery(function () {
    llenarcomboxservicios("http://localhost:50132/api/sucursal/listartodos", "#cboidsucursal", 'IDSucursal', 'NombreSucursal');
    llenartabla();
});
function llenartabla() {
    llenartablaxservicios("http://localhost:50132/api/farmaceuta/listar", "#tblinfo");
}
class farmaceuta {
    constructor(Documento, IDSucursal, Nombre, Cargo, Telefono, Correo, FechaContratacion) {
        this.Documento = Documento;
        this.IDSucursal = IDSucursal;
        this.Nombre = Nombre;
        this.Cargo = Cargo;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.FechaContratacion = FechaContratacion;
    }
}
async function ejecutar(metodo, funcion) {
    let url = "http://localhost:50132/api/farmaceuta/" + funcion;
    const _farmaceuta = new farmaceuta($("#txtdocumento").val(), $("#cboidsucursal").val(),
        $("#txtnombre").val(), $("#txtcargo").val(), $("#txttelefono").val(), $("#txtcorreo").val(),
        $("#txtfechacontratacion").val());
    console.log(_farmaceuta);
    await ejecutarservicio(metodo, url, _farmaceuta);
    llenartabla();
}
async function consultar() {
    let codigo = $("#txtdocumento").val();
    let url = "http://localhost:50132/api/farmaceuta/consultar?documento=" + codigo;
    const _farmaceuta = await consultarservicio(url);
    console.log(_farmaceuta);
    if (_farmaceuta) {
        $("#txtdocumento").val(_farmaceuta.Documento);
        $("#txtnombre").val(_farmaceuta.Nombre);
        $("#txtcargo").val(_farmaceuta.Cargo);
        $("#txtfechacontratacion").val(_farmaceuta.FechaContratacion.split('T')[0]);
        $("#txttelefono").val(_farmaceuta.Telefono);
        $("#txtcorreo").val(_farmaceuta.Correo);
        $("#cboidsucursal").val(_farmaceuta.IDSucursal);
    }
}