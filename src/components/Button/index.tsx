import React from 'react';

import styles from './Button.module.scss';

export interface IButtonProps {
    text: string
}

const Button = ({ text = ''}: IButtonProps) => {
    return (
      <button type="submit" className={styles.button}>
        <i className="fas fa-bug"/>
        <span>{text}</span>
      </button>
    )
}

export default Button;
