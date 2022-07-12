import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({pacientes}) {

  return (
    <div className="md:w-1/2 lg:2/5 md:h-screen overflow-y-scroll">
        <h2 className='font-black text-3xl text-center'>Litado de Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

        {pacientes.map( (paciente) => {
          return (
            <Paciente paciente={paciente} key={paciente.id}/>
          )
        })}

    </div>
  )
}

export default ListadoPacientes