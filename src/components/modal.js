import React from 'react';
import { ModalContainer } from './style'

function Modal (props) {
  const {show, setShow, pages, lenguages} = props
  
  return(
  <ModalContainer onClick={()=>setShow(0)} active={show}>
    {show === 1
    ?<div>
      <p> aqui puedes elegir el numero de paginas que quieres poner en tu web.</p><br/>
          tienes {pages} paginas seleccionadas
      
    </div>
    :null}
    {show === 2
    ?<div>
      <p> aqui puedes elegir el numero de idiomas en los que estara tu web.</p><br/>
          tienes {lenguages} idiomas seleccionados
    </div>
    :null}
    
  </ModalContainer>
  )
}


export default Modal