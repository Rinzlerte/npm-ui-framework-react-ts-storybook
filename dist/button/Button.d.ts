import { FC, ReactNode } from 'react';
import './button.css';
export interface ButtonProps {
    color: string;
    big?: boolean;
    children: ReactNode;
}
declare const Button: FC<ButtonProps>;
export default Button;
