import React from 'react'
import styles from './styles.module.scss'

export default function Clock() {
    const [hour, setHour] = React.useState(new Date().getHours())
    const [minute, setMinute] = React.useState(new Date().getMinutes())
    const [second, setSecond] = React.useState(new Date().getSeconds())

    const changingTime = () => {
        setHour(new Date().getHours())
        setMinute(new Date().getMinutes())
        setSecond(new Date().getSeconds())
    }

    React.useEffect(() => {
        setInterval(() => changingTime(), 1000)
    }, [])

    const message = (
        <p className={styles.message}>Число минут делится на 5</p>
    )
    return (
        <>
            <div className={styles.clock}>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <p className={styles.clockText}>Текущее время:</p>
                        <p className={styles.clockTime}>{hour} : {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}</p>
                        {minute % 5 === 0 ? message : ""}
                    </div>
                </div>
            </div>
        </>
    )
}