export interface IButton {
  variant: 'solid' | 'outlined'
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset' | 'menu'
}
