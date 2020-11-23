import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}, ref) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    minimal={minimal}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
