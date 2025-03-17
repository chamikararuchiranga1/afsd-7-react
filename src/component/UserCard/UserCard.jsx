import './style.css'

export default function UserCard ({children, title}) {
    return(
        <div className='card'>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, numquam at? Ipsa ducimus dicta odio ex, eius, aliquid id, veritatis ratione facere labore consequuntur sunt minus quas beatae omnis fugiat!</p>
            <div>
                {children}
            </div>
            <div className='footer'>
                Footer
            </div>
        </div>
    )
}