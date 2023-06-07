import React , {FC, ReactElement,ReactNode} from 'react'
import './button.css'


export interface ButtonProps {
  color: string,
  big?: boolean,
  children: ReactNode,
 
}

const Button: FC<ButtonProps> = ({children, big, color, ...props} ) : ReactElement => {
  const rootClasses = ['my-button']
    if (big) {
        rootClasses.push('big-btn')
    }
  return (
    <button {...props} className={rootClasses.join(' ')} style={{color}}>{
      children
    }</button>
  )
}
 
export default Button