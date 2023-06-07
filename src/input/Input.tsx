import React, {FC} from 'react'

import './input.css'

export interface InputProps {
  big: boolean;
  placeholder: string;
  label: string;
}

const Input: FC<InputProps> = ({big, placeholder, label, ...props}) => {
  const classes = ['my-input'];
  if (big) {
      classes.push('big-input')
  }
  return (
      <label>
          {label}
          <input className={classes.join(' ')} placeholder={placeholder} {...props}/>
      </label>
  );
};

export default Input;