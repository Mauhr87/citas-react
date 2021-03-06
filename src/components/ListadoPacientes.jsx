import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:2/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (
          <>
            <h2 className='font-black text-3xl text-center'>Litado de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
          </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Comienza agregando pacientes <span className="text-indigo-600 font-bold">y apareceran en este lugar</span></p>
          </>
        )
        }

        {pacientes.map( (paciente) => {
          return (
            <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
          )
        })}

    </div>
  )
}

export default ListadoPacientes