import React from 'react';
import './TextBox.scss';

const textBox = (props) => (
    <div className="textbox__input-wrap">
        <input type="text" placeholder="Закончить регистрацию пользователя" />
    </div>
);

export default textBox;