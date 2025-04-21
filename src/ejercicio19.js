//Crear un script para obtener cada uno de los elementos input creados, mediante el método querySelector(), manipular los elementos para obtener su valor con la propiedad JS value y mostrar los datos con un alert
const obtenerDatos = () => {
    const nombre=document.querySelector("#nombre").value;
    const apellido=document.querySelector("#apellido").value;
    const libreta=document.querySelector("#libreta").value;
    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
};
export {obtenerDatos};

document.querySelector("#mostrarDatos").addEventListener("click", () => {
    obtenerDatos();
});