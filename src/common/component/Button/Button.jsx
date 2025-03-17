import './style.css'

export default function Button (props) {

    return(
        <button onClick={props.onClick} style={{backgroundColor: props.bgColor}} className='btn'>{props.name}</button>
    )
}

export function OutLineButton ({name, color}) {
    return (
        <button style={{borderColor: color, color: color}} className='outlineBtn'>{name}</button>
    )
}