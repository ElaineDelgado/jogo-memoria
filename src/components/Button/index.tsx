import * as C from './styles'

type Props = {
  label: string
  icon?: any
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ label, icon, onClick }: Props ) => {
  return (
    <C.Container onClick={onClick}>
      <C.Label>{label}</C.Label>
      {icon && 
      <C.IconArea>
        <C.Icon src={icon} />
      </C.IconArea>
      }
    </C.Container>
  )
}

export default Button