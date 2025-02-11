import React, { useState } from 'react';
import './CollabSection.css';

function CollabSection() {

    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const handleClick = () => {
        setTelephone('')
        setZipCode('')
        setName('')
        setSubmitted(false)
    }

    return (
        <div className="collab-section">
            {!submitted ? (
                <>
                    <div className="collab-header">
                        <img src="/img/icon-collab.png" alt="Colaborador" className="collab-icon" />
                        <span className="collab-title">Seja um colaborador</span>
                    </div>

                    <div className="collab-line-container">
                        <hr className="collab-line" />
                    </div>

                    <form className="collab-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome e Apelido</label>
                            <input type="text" id="nome" placeholder="Ex: Carlos Alberto"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="telephone">Telefone</label>
                            <input type="tel" id="telephone" placeholder="Ex: +351 900 000 000"
                                value={telephone}
                                onChange={e => setTelephone(e.target.value)}
                                required
                            />

                            <label htmlFor="zip-code">Código Postal</label>
                            <input type="text" id="zip-code" placeholder="Ex: 4232-000"
                                value={zipCode}
                                onChange={e => setZipCode(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-action">
                            <button type="submit" className="collab-btn">Seja um colaborador</button>
                        </div>
                    </form>
                </>
            ) :
                <>
                    <div className='submitted-msg'>
                        <h3>Os seus dados foram enviados!</h3>
                        <p><strong>Nome:</strong> {name}</p>
                        <p><strong>Telefone:</strong> {telephone}</p>
                        <p><strong>Código Postal:</strong> {zipCode}</p>
                        <button className="return-btn" onClick={handleClick}>Voltar</button>
                    </div>
                </>
            }
        </div>
    );
}

export default CollabSection;