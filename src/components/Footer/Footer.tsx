import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <footer className="footer">
      <div className='above-part'>
        <div className="left-side">
          <a href="/" className="footer-logo">
            <img src="/img/MR.WIPE.png" alt="Logo" />
          </a>
          <div className='footer-headline'>
            Limpeza Premium à distância de um toque
          </div>
          <div>
            <nav className="footer-items">
              <a href="#">Política de privacidade</a>
              <a href="#">Termos e condições</a>
              <a href="#">Livro de reclamações</a>
            </nav>
          </div>
        </div>
        <div className="right-side">
          <div className="dl-letters">
            Descarrega já
          </div>
          <div className="dl-btn">
            <img src="/img/App-Store-footer.png" />
            <img src="/img/Google-Play-footer.png" />
          </div>
        </div>
      </div>

      <div className="footer-line-container">
        <hr className="footer-line" />
      </div>

      <div className='below-part'>
        <p className='reserved-rights'>© 2025 MR.Wipe - Todos os direitos reservados</p>
        <div className="social-icons">
          <img src="/img/instagram-icon.png" />
          <img src="/img/x-icon.png" />
          <img src="/img/linkedin-icon.png" />
          <img src="/img/facebook-icon.png" />
        </div>
      </div>

    </footer>
  )
}

export default Footer