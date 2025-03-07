import { useEffect } from 'react'
import style from "./Message.module.css"
const Message = ({ message, setMessage, error, setError }) => {

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("")
            }, 1500);
            return
        }
        setTimeout(() => {
            setError("")
        }, 1500);
        return
    }, [ message, error ]);
    return (
        <div className={ `${style.messageWrapped} ${message ? style.complete : ""} ${error ? style.error : ""}` }>
            <p>{ message } <span>&#x2714;</span></p>
        </div>
    )
}

export default Message