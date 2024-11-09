jQuery(function () {
    llenartabla();

});
function llenartabla() {
    llenartablaxservicios("http://localhost:50132/api/proveedores/listar", "#tblinfo");
}
class proveedor {
    constructor(IDProveedor,Nombreproveedor, Telefono, Correo, Direccion) {
        this.IDProveedor = IDProveedor;
        this.Nombreproveedor = Nombreproveedor;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Direccion = Direccion;
    }
}
async function ejecutar(metodo, funcion) {
    let url = "http://localhost:50132/api/proveedores/" + funcion;
    const _proveedor = new proveedor($("#txtidproveedor").val(), $("#txtNombreProveedor").val(),
        $("#txtTelefonoProveedor").val(), $("#txtCorreoElectronico").val(), $("#txtDireccionProveedor").val());
    console.log(_proveedor);
    await ejecutarservicio(metodo, url, _proveedor);
    llenartabla();
}
async function consultarxnombre() {
    let codigo = $("#txtNombreProveedor").val();
    let url = "http://localhost:50132/api/proveedores/Consultarxnombre?nombre=" + codigo;
    const _proveedor = await consultarservicio(url);
    console.log(_proveedor);
    if (_proveedor) {
        $("#txtidproveedor").val(_proveedor.IDProveedor);
        $("#txtNombreProveedor").val(_proveedor.Nombreproveedor);
        $("#txtTelefonoProveedor").val(_proveedor.Telefono);
        $("#txtCorreoElectronico").val(_proveedor.Correo);
        $("#txtDireccionProveedor").val(_proveedor.Direccion);
    }
}
async function consultar() {
    let codigo = $("#txtidproveedor").val();
    let url = "http://localhost:50132/api/proveedores/Consultar?id=" + codigo;
    const _proveedor = await consultarservicio(url);
    console.log(_proveedor);
    if (_proveedor) {
        $("#txtidproveedor").val(_proveedor.IDProveedor);
        $("#txtNombreProveedor").val(_proveedor.Nombreproveedor);
        $("#txtTelefonoProveedor").val(_proveedor.Telefono);
        $("#txtCorreoElectronico").val(_proveedor.Correo);
        $("#txtDireccionProveedor").val(_proveedor.Direccion);
    }
}
