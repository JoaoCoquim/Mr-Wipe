import React from 'react'
import './DownloadSection.css'

function DownloadSection() {

  return (
    <div className="dl-section">
      <div className="dl-lettering">
        Faça já o download da aplicação
      </div>
      <div className="dl-buttons">
        <img src="/img/Google Play.png" alt='Google Play download'/>
        <img src="/img/App Store.png"  alt='App Store download'/>
      </div>
    </div>
  )
}

export default DownloadSection