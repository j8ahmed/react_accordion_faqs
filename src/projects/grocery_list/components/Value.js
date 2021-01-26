import React, { useState, useEffect } from 'react'
// import { rgbToHex } from '../assests/utils'

const Value = ({ index, rgb, weight, hex }) => {
    const [ alert, setAlert ] = useState(false);
    const bcg = rgb.join(',')

    useEffect(() => {
        const TO = setTimeout(() => {
            setAlert(false);
        }, 3000)
        return () => clearTimeout(TO);
    }, [alert])
    return (
        <div 
        className={`color_item ${index > 10 && 'text_light'}`} 
        style={{backgroundColor: `rgb(${bcg})`}}
        onClick={ () => {
            setAlert(true);
            navigator.clipboard.writeText(`#${hex}`)
        }}
        >
            <h4 className="percent_val">{ `${weight}%` }</h4>
            {/* Two ways to return the Hex color value */}
            {/* <h4 className="hex_val">{ `${rgbToHex(...rgb)}` }</h4> */}

            <h4 className="hex_val">{ `#${hex}` }</h4>
            <p>{alert && "Copied to clipboard"}</p>
        </div>
    )
}

export default Value
