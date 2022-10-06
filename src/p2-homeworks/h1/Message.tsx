import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.messageContainer}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={styles.messageBlock}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.messageTime}>
                    <div className={styles.message}>{props.message}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
