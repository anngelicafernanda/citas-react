function Formulario() {

    return (

        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {" "}
                <span className="text-indigo-600 font-bold">Administradolos</span> </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascotas</label>
                    <input id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                    <input id="alta" type="date"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas" >Síntomas</label>
                    <textarea placeholder="Describe los Síntomas" name="" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
                </div>

                <input type="submit" value="Agregar Paciente" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"/>
            </form>

        </div>


    )
}

export default Formulario
