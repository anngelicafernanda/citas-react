import { useState, useEffect } from "react";
import Error from "./Error"

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");

    const [error, setError] = useState(false)

    useEffect(()=>{
       if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
       } 
    }, [paciente])
   

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (event) => {
    event.preventDefault();
        //validacion de formulario
        if([nombre,propietario,email,fecha,sintomas].includes("")){
            console.log("Hay al menos un campo vacio")
            setError(true)
            return;
        } 
    setError(false)

    //Objeto de pacientes

    const objetoPaciente = {nombre, propietario, email, fecha, sintomas, id:generarId()}

    if (paciente.id) {
        //Editando registro
        objetoPaciente.id = paciente.id


        const pacientesActualizados = pacientes.map(pacienteState => 
            pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        ) 
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
        //nuevo registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente])
    }




 
    //Reiniciar Formulario

    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")

    }

    return (

        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">A??ade Pacientes y {" "}
                <span className="text-indigo-600 font-bold">Administradolos</span> </p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" action="">
            {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota:</label>
                    <input onChange={(e) => setNombre(e.target.value)} value={nombre} id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input onChange={(e) => setPropietario(e.target.value)} value={propietario} id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" type="text" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                    <input onChange={(e) => setFecha(e.target.value)} value={fecha} id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>

                <div>
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas" >S??ntomas</label>
                    <textarea onChange={(e) => setSintomas(e.target.value)} value={sintomas} placeholder="Describe los S??ntomas" name="" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
                </div>

                <input type="submit" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
            </form>

        </div>


    )
}

export default Formulario
