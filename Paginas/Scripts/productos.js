jQuery(function () {
    llenarcomboxservicios("http://localhost:50132/api/categorias/listartodos", "#cboidcategoria", 'IDCategoria', 'Nombrecategoria');
    llenarcomboxservicios("http://localhost:50132/api/proveedores/listartodos", "#cboidproveedor", 'IDProveedor', 'Nombreproveedor');
    llenartabla();
    
});
function llenartabla() {
    llenartablaxservicios("http://localhost:50132/api/producto/listar", "#tblinfoprod");
}

class producto {
    constructor(IDProducto, IDCategoria, IDProveedor, Nombreproducto, Descripcion, Presentacion, Cantidad, PrecioUnitario) {
        this.IDProducto = IDProducto;
        this.IDCategoria = IDCategoria;
        this.IDProveedor = IDProveedor;
        this.Nombreproducto = Nombreproducto;
        this.Descripcion = Descripcion;
        this.Presentacion = Presentacion;
        this.Cantidad = Cantidad;
        this.PrecioUnitario = PrecioUnitario;
    }
}
async function ejecutar(metodo, funcion) {
    let url = "http://localhost:50132/api/producto/" + funcion;
    const _producto = new producto($("#txtidproducto").val(), $("#cboidcategoria").val(),
        $("#cboidproveedor").val(), $("#txtnombre").val(), $("#txtdescripcion").val(), $("#txtpresentacion").val(), $("#txtcantidad").val(), $("#txtpreciounitario").val());
    console.log(_producto);
    await ejecutarservicio(metodo, url, _producto);
    llenartabla();
}
async function consultar() {
    let codigo = $("#txtidproducto").val();
    let url = "http://localhost:50132/api/producto/consultar?idproducto=" + codigo;
    const _producto = await consultarservicio(url);
    console.log(_producto);
    if (_producto) {
        $("#txtidproducto").val(_producto.IDProducto);
        $("#cboidcategoria").val(_producto.IDCategoria);
        $("#cboidproveedor").val(_producto.IDProveedor);
        $("#txtnombre").val(_producto.Nombreproducto);
        $("#txtdescripcion").val(_producto.Descripcion);
        $("#txtpresentacion").val(_producto.Presentacion);
        $("#txtcantidad").val(_producto.Cantidad);
        $("#txtpreciounitario").val(_producto.PrecioUnitario);
    }
}
