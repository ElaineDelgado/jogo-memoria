import GridItemsType from '../../types/GridItemsType'
import * as C from './styles'
import coverIcon from '../../svgs/interrogation-light.png'
import {items} from '../../data/items'

type Props = {
  item: GridItemsType,
  onClick: () => void,
}

const GridItem = ({item, onClick}: Props) => {
  return (
    <C.Container 
      showBackground={item.permanentShown || item.shown}
      onClick={onClick}>
      {!item.permanentShown && !item.shown && 
        <C.Icon src={coverIcon} alt="Ponto de interrogação" opacity={.9}/>
      }
      {
        (item.permanentShown || item.shown) && item.item !== null &&
        <C.Icon src={items[item.item].icon} alt={items[item.item].name}/>
      }
    </C.Container>
    )
}

export default GridItem