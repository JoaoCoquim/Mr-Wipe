import React from 'react'
import './HouseCleaningService.css'

function HouseCleaningService() {

  return (
    <div className="cleaning-service">
      <div className="service-titles">
        <h3 className="subtitle">Mais tempo para o que realmente importa</h3>
        <h2 className="title">Serviço premium de limpeza ao domicílio</h2>
      </div>

      <div className="service-block">
        <div className="service-details">
          <div className="service-header">
            <img src="/img/icon-house.png" alt="House icon" className="house-icon" />
            <span className="service-title">Serviço premium de limpeza ao domicílio</span>
          </div>

          <div className="service-description">
            <p className="description">
              Profissionais experientes, produtos de qualidade e atenção ao detalhe. De limpezas
              <br />
              regulares a limpezas profundas, garantimos um espaço limpo, fresco e livre de germes.
              <br />
              Agende já e desfrute de um ambiente mais saudável!
            </p>
          </div>

          <ul className="service-features">
            <li>Casas de todas as tipologias</li>
            <li>Limpeza doméstica simples</li>
            <li>Limpeza doméstica profunda</li>
            <li>Tapetes, estores, vidros, etc...</li>
            <li>Serviço 100% customizável</li>
          </ul>
        </div>

        <div className="service-image">
          <img src="/img/house-cleaning.png" alt="House Cleaning" />
        </div>
      </div>
    </div>
  )
}

export default HouseCleaningService