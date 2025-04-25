import React from 'react'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <p className={styles.headerText}>Это мой первый React проект!</p>
                </div>
            </header>
        </>
    )
}