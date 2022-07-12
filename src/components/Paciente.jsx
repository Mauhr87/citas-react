import React from 'react'

function Paciente({paciente}) {

  const {nombre, propietario, email, fecha, sintomas} = paciente;

  return (
    <div className="bg-white shadow-md m-3 rounded-lg py-10 px-5 mb-3">
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: <span className='font-normal normal-case'>{nombre}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: <span className='font-normal normal-case'>{propietario}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: <span className='font-normal normal-case'>{email}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: <span className='font-normal normal-case'>{fecha}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: <span className='font-normal normal-case'>{sintomas}</span></p>
    </div>
  )
}

export default Paciente