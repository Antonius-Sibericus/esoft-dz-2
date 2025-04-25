import React from 'react'
import styles from "./styles.module.scss"

export default function GreetingComponent(props) {
    const { name, change } = props
    return (
        <>
            <main className={styles.greeting}>
                <div className={styles.container}>
                    <p className={styles.text}>{change ? "Привет, у тебя поменялось имя, теперь ты " : "Привет, "}
                        <span className={styles.name}>
                            {name}!
                        </span>
                    </p>
                </div>
            </main>
        </>
    )
}