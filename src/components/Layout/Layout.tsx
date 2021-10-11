import React from 'react';
import styles from './Layout.module.scss';

interface PropsType {
    header: string,
    classPage: string
}

const Layout: React.FC<PropsType> = ({ header, classPage, children }) => {
    return (
        <main className={styles.wrapper}>
            <section className={classPage}>
                <h1>{header}</h1>
                {children}
            </section>
        </main>
    )
}

export default Layout;