import Button, { OutLineButton } from "../../common/component/Button/Button";
import image from '../../assets/react.svg'
import UserCard from "../../component/UserCard/UserCard";
import './style.css'
import { useState, useEffect, useRef } from "react";

export default function Home() {

    const textRef = useRef(null)
    const [count, setCount] = useState(0);
    const [data, setData] = useState('')

    useEffect(() => {
        console.log('runnnnnnnn......!' + count)
        console.log(data)
    }, [count, data])

    return (
        <div>
            <h1>Home</h1>
            <h1>ACPT</h1>
            <h1>ddd</h1>
            <h1>{count}</h1>
            <Button name={'Delete'} bgColor={'blue'} onClick={() => { setCount(count + 1) }} />
            <Button name={'Add'} bgColor={'green'} onClick={() => { setData('ACPT') }} />
            <OutLineButton color={'#000'} name={'Update'} />
            <input type="text" />
            <img src={image} alt="" />

            <UserCard title={'Chamikara'}>
                <div className="content">
                    <h1>ACPT</h1>
                    <img src={image} alt="" />
                </div>
            </UserCard>

            <div className="form">
                <input type="text" ref={textRef}/><br />
                <label htmlFor="">error</label><br /><br />

                <input type="text" /><br />
                <label htmlFor="">error</label>
                <br /><br />

                <button onClick={()=> textRef.current.focus()}>Click Text</button>
            </div>
        </div>
    )
}