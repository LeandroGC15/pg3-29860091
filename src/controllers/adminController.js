import { adminGet } from './admin/admin.js';
import { categoriasGet, categoriasPost } from './admin/categorias/categorias.js';
import { agregarCategoriaGet, agregarCategoriaPost } from './admin/categorias/agregarCategoria.js';

import { productosGet, productosPost } from './admin/productos/productos.js';

import {
    agregarProductoGet,
    agregarProductoPost
} from "./admin/productos/agregarProducto.js"

import eliminarProductoDelete from "./admin/productos/eliminarProducto.js"

import {
    agregarImgProductoGet,
    agregarImgProductoPost
} from "./admin/productos/imagenesProducto.js"

import {
    actualizarProductoGet,
    actualizarProductoPost
} from "./admin/productos/editarProducto.js"

import { comprasGet } from "./admin/compras/compras.js"

export {
    categoriasGet,
    categoriasPost,
    adminGet,
    agregarCategoriaGet,
    agregarCategoriaPost,
    productosGet,
    productosPost,
    agregarProductoGet,
    agregarProductoPost,
    eliminarProductoDelete,
    agregarImgProductoGet,
    agregarImgProductoPost,
    actualizarProductoGet,
    actualizarProductoPost,
    comprasGet
}