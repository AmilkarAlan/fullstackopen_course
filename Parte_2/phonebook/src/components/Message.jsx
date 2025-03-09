import { useEffect } from 'react'
import style from "./Message.module.css"
const Message = ({ message, setMessage, error, setError }) => {

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("")
            }, 2000);
            return
        }
        setTimeout(() => {
            setError("")
        }, 2000);
        return
    }, [ message, error ]);
    return (
        <div className={ `${style.messageWrapped} ${message ? style.complete : ""} ${error ? style.error : ""}` }>
            <p>{ message }</p>
        </div>
    )
}

export default Message