
const component_to_hex = (c) => {
    //only max 255 should be passed otherwise you will have problems
    let hex = c.toString(16);

    return hex.length === 1 ? '0'+hex : hex 
}

export const rgbToHex = (r,g,b) => {
    return ( '#' +
        component_to_hex(r) +
        component_to_hex(g) +
        component_to_hex(b)
    )
}