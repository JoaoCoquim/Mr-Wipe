import React from 'react'
import './Headlines.css'

function Headlines() {

  return (
    <div className="headline-container">
      <div className='headline-title'>
        <div className='headline-small'>
          Tenha mais tempo para si
        </div>
        <div className='headline-main'>
          Limpeza Premium à <br /> distância de um toque
        </div>
      </div>

      <div className="headline-line-container">
        <hr className="headline-line" />
      </div>

      <div className='headline-subtitle'>
        Com a aplicação móvel da MrWipe, agende serviços premium para sua casa, empresa ou
        <br />
        veículo em segundos e aproveite o seu dia sem preocupações.
      </div>
    </div>
  )
}

export default Headlines