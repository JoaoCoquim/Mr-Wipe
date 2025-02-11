import React from 'react'
import './AutomotiveCleaningService.css'

function AutomotiveCleaningService() {

  return (
    <div className="automotive-cleaning-service">
      <div className="automotive-service-details">
        <div className="automotive-service-header">
          <img src="/img/icon-car.png" alt="Car icon" className="car-icon" />
          <span className="automotive-service-title">A nova referência em limpeza automotiva</span>
        </div>

        <div className="automotive-service-description">
          <p className="automotive-description">
            Oferecemos um serviço de limpeza de alta qualidade que deixa o seu
            <br />
            carro impecável, por dentro e por fora. Com uma abordagem ecológica
            <br />
            e produtos sustentáveis, cuidamos de cada detalhe para que o seu
            <br />
            automóvel brilhe e contribua para o ambiente.
          </p>
        </div>

        <ul className="automotive-service-features">
          <li>Independente de tamanho</li>
          <li>Aspiração e higienização</li>
          <li>Polimento de excelência</li>
          <li>Renovação de para-choques</li>
          <li>Quatro opções de limpeza, do básico ao completo</li>
        </ul>
      </div>

      <div className="automotive-service-image">
        <img src="/img/car-cleaning.png" alt="Car Cleaning" />
      </div>
    </div>
  )
}

export default AutomotiveCleaningService