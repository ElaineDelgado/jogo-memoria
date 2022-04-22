import React from 'react'
import * as C from './App.styles'
import logo from './assets/logo.png'
import InfoItem from './components/InfoItem'
import Button from './components/Button'
import RestartIcon from './svgs/restart.svg'
import GridItemsType from './types/GridItemsType'
import {items} from './data/items'
import GridItem from './components/GridItem'
import formatTimeElapsed from './helpers/formatTimeElapsed'
import  './App.css'


function App() { 
    
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = React.useState<number>(0) 
  const [moveCount, setMoveCount] = React.useState<number>(0)
  const [shownCount, setShownCount] = React.useState<number>(0)
  const [gridItems, setGridItems] = React.useState<GridItemsType[]>([])
  
  React.useEffect(() =>  resetAndCreateGrid() ,[])

  React.useEffect(() => {
    const timer = setInterval(()=> {
      if (isPlaying) {
        setTimeElapsed(timeElapsed + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [isPlaying, timeElapsed])

  React.useEffect(() => {
    if (shownCount === 2) {
      let opended = gridItems.filter(item => item.shown === true)
      if (opended.length === 2) {
        if(opended[0].item === opended[1].item) {
          let tempGrid = [...gridItems]
          for (let item in tempGrid) {
            if (tempGrid[item].shown) {
              tempGrid[item].permanentShown = true
              tempGrid[item].shown = false
            }
          }
          setGridItems(tempGrid) 
          setShownCount(0)
        } else {
          setTimeout(() => {
            let tempGrid = [...gridItems]
            for (let item in tempGrid) {
              tempGrid[item].shown = false
            }
            setGridItems(tempGrid) 
            setShownCount(0)
          },1000)
        }

        setMoveCount(moveCount => moveCount + 1)
      }
    }
  },[shownCount, gridItems])

  React.useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown)) {
      setIsPlaying(false)
    }
  } ,[moveCount,gridItems])

  const resetAndCreateGrid = () => {
    setTimeElapsed(0)
    setMoveCount(0)
    setShownCount(0)
    
    let tempGrid: GridItemsType[] = []

    for(let item = 0; item < (items.length * 2); item++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      })
    }

    for(let pairItems = 0; pairItems < 2; pairItems++) {
      for (let item = 0; item < items.length; item++) {
        let position = -1
        while(position < 0 || tempGrid[position].item !== null) {
          position = Math.floor(Math.random() * (items.length * 2))
        }
        tempGrid[position].item = item
      }
    }

    setGridItems(tempGrid)
    setIsPlaying(true)
  }

  const handleItemClick = (index: number) => {
    if (isPlaying && index !== null && shownCount < 2) {
      let tempGrid = [...gridItems]

      if (!tempGrid[index].permanentShown && !tempGrid[index].shown) {
        tempGrid[index].shown = true
        setShownCount(shownCount + 1)
      }
      setGridItems(tempGrid)
    }    
  }

  return (
    <C.Wrapper>
      <C.Header>
          <C.LogoLink href="">
            <img src={logo} width="550" alt="Logo texto devMemory" />
            <h1 className="sr-only">Jogo da memória</h1>
          </C.LogoLink>
      </C.Header>
      <C.Container>
        <C.Info>
          <C.InfoArea>
            <InfoItem label="Tempo:" value={formatTimeElapsed(timeElapsed)}/>
            <InfoItem label="Movimentos:" value={moveCount.toString()}/>
          </C.InfoArea>
          <Button 
            icon={RestartIcon} 
            label="Reiniciar" 
            onClick={resetAndCreateGrid}
          />
        </C.Info>
        <C.GridArea>
          <C.Grid>
            {gridItems.map((item, index) =>  (
              <GridItem 
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
              />
            ))}
          </C.Grid>
        </C.GridArea>
      </C.Container>
    </C.Wrapper>
  )
}

export default App