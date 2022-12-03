import React,{useState,useEffect} from 'react'
import Token from './token'

function Grid() {
  const arr =  Array(7).fill(null)
  const [grid,setGrid] = useState(Array(6).fill(0).map(x =>arr.slice()))
  const [yturn,setYturn] = useState(false)

  const checkCol = (row,col) => {
    const ar = grid.slice()
    if(row===5){
      return true
    }else if(ar[row+1][col]){
      return true
    }else{
      return false
    } 
  }

  const handleChange = (row,col) =>{
    if(!grid[row][col] && checkCol(row,col)){
      const ar = grid.slice()
      ar[row][col] = yturn ? "yellow" : "red"
      setYturn(!yturn)
      setGrid(ar)
  }
}
  return(
    <div className='grid'>
    {grid.map((row,rid)=>(
      <React.Fragment key={rid}>
        {row.map((col,cid)=>(
          <>
            <Token onClick={()=>handleChange(rid,cid)} value={grid[rid][cid]}/>
          </>
    ))}
      </React.Fragment>
    ))}
    </div>
  )
}

export default Grid