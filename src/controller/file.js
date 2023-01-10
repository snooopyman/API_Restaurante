const fs = require('fs');
const {json} = require("express");

class ContenedorFile {
    constructor(ruta) {
        this.ruta = ruta;
    }

    getAll(){
        try {
            const resJson = fs.readFileSync(this.ruta, 'utf-8');
            return JSON.parse(resJson);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    getById(id){
        try {
            const data = this.getAll();
            const response = data.find(el => el.id == id);
            if (!response) throw new Error('No se encontró el producto')
            return response;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    updateById(id, estado){
        try {
            const data = this.getAll();
            const response = data.find(el => el.id == id);
            if (!response) throw new Error('No se encontró el producto')
            response.estado = estado;
        }catch (e) {
            console.log(e);
            throw e;
        }
    }
}

module.exports = ContenedorFile;