import { FC } from 'react';
import './input.css';
export interface InputProps {
    big: boolean;
    placeholder: string;
    label: string;
}
declare const Input: FC<InputProps>;
export default Input;
