import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.errorBlock}>
            <div className={s.error}>Page not found!</div>
            <div>
                <img className={s.img} src="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=2000g" alt="Error 404"/>
            </div>
        </div>
    )
}

export default Error404
