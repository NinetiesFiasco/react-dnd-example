let knightPosition = [0,0]
let observer = null

function emitChange(){
  observer(knightPosition)
}

export function observe(o) {
  if (observer){
    throw new Error("Only one observer")
  }
  observer = o 

  emitChange()
}

export function moveKnight(toX,toY){
  knightPosition = [toX,toY]
  emitChange()
}

export function canMoveKnight(toX,toY){
  const [x,y] = knightPosition;
  const dx = Math.abs(toX-x)
  const dy = Math.abs(toY-y)

  return (dx === 2 && dy === 1) || (dy === 2 && dx === 1)  
}