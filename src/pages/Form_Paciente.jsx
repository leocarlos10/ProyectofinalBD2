import React from 'react'
import { MainForm_paciente } from '../Components/MainForm_paciente'
import { HeaderForm } from '../Components/HeaderForm'
import { Footer } from '../Components/Footer'

export const Form_Paciente = () => {
  return (
    <>
    <HeaderForm/>
    <MainForm_paciente/>
    <Footer/>
    </>
  )
}
