import React,{useState,useEffect} from 'react'
import Token from './token'
import Scoreboard from './scoreboard'

function Grid() {
  const arr =  Array(6).fill(0).map(x =>Array(7).fill(null))
  const [grid,setGrid] = useState(arr.slice())
  const [yellow,setYellow] = useState(0)
  const [red,setRed] = useState(0)
  const [yturn,setYturn] = useState(false)


  useEffect(()=>{
    setGrid(arr.slice())
  },[red,yellow])

  const checkCol = (row,col) => {
    const ar = grid.slice()
    if(ar[row][col] === "red" || ar[row][col]=== "yellow"){
      return false
    }
    else if(row===5){
      return true
    }else if(ar[row+1][col]){
      return true
    }else{
      return false
    } 
  }

  const checkWinner = (arr) =>{
    //horizontal
    for(let row = 0; row<6;row++){
      for(let col = 0; col<5;col++){
        if(arr[row][col]!=null){
          if(arr[row][col]===arr[row][col+1]&&arr[row][col]===arr[row][col+2]&&arr[row][col]===arr[row][col+3]){
            winner(arr[row][col])
            return
          }
        }
      }
    }
    //vertically
    for(let row = 0; row<3;row++){
      for(let col = 0; col<7;col++){
        if(arr[row][col]){
          if(arr[row][col]===arr[row+1][col]&&arr[row][col]===arr[row+2][col]&&arr[row][col]===arr[row+3][col]){
            winner(arr[row][col])
            return;
          }
        }
      }
    }
    //diagnally
    for(let row = 0; row<3;row++){
      for(let col = 0; col<4;col++){
        if(arr[row][col]){
          if(arr[row][col]===arr[row+1][col+1]&&arr[row][col]===arr[row+2][col+2]&&arr[row][col]===arr[row+3][col+3]){
            winner(arr[row][col])
            return;
          }
        }
      }
    }
    //diagnally
    for(let row = 3; row<6;row++){
      for(let col = 0; col<4;col++){
        if(arr[row][col]){
          if(arr[row][col]===arr[row-1][col+1]&&arr[row][col]===arr[row-2][col+2]&&arr[row][col]===arr[row-3][col+3]){
            winner(arr[row][col])
            return;
          }
        }
      }
    }
  }

  const winner = (player) =>{
    if(player==="red"){
      setRed(prev=>prev+1)
    }else if(player==="yellow"){
      setYellow(prev=>prev+1)
    }
  }

  const handleChange = (row,col) =>{
    if(!grid[row][col] && checkCol(row,col)){
      const player = yturn ? "yellow" : "red"
      const ar = grid.slice()
      ar[row][col] = player
      checkWinner(ar)
      console.log(ar)
      setYturn(!yturn)
      setGrid(ar)
  }
}
  return(
    <>
    <Scoreboard red={red} turn={yturn} yellow={yellow}/>
    <div className='grid'>
    {grid.map((row,rid)=>(
      <React.Fragment key={rid}>
        {row.map((col,cid)=>(
          <>
            <Token onClick={()=>handleChange(rid,cid)} checkCol={checkCol(rid,cid)} value={grid[rid][cid]}/>
          </>
    ))}
      </React.Fragment>
    ))}
    </div>
    </>
  )
}

export default Grid