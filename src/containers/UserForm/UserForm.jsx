import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  return (
    <React.Fragment>
        <div className="post__form"  data-testid="user-form">
            <label htmlFor="name">Nome: </label>
            <input type="text" id="name" />

            
            <label htmlFor="name">Sobrenome: </label>
            <input type="text" id="name" />

            
            <label htmlFor="name">email: </label>
            <input type="email" id="name" />

            
            <label htmlFor="name">Senha: </label>
            <input type="password" id="name" />

            <div className="post__form__wrapper">
                <button>Enviar</button>
            </div>
        </div>
    </React.Fragment>
  );
};

export default UserForm;
