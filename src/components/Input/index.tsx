import React from 'react';
import { InputProps } from '../../App';

import styles from './Input.module.scss';

const Input = ({ register, label }: InputProps) => {
    return (
      <label className={styles.label}>
        <input type="text" {...register(label)} placeholder="Ваш номер..." required />
      </label>
    )
}
export default Input;
