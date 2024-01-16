import React from 'react'
import './color.css'
import { useState } from 'react'

function Colorbox() {
  const [color,setColor]=useState(" ")
  return (
    <div>
        <div className="box" style={{backgroundColor:color}} >

        </div>
        <label>Input a color:</label>
        <input type='text' value={color} className='color-text'
                onChange={(e)=>{
                setColor(e.target.value);
                console.log(color)
                }
        }></input>
        <p>Input color: {color}</p>
    </div>
  )
}

export default Colorbox