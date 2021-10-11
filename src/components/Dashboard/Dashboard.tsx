import React from 'react';
import styles from './Dashboard.module.scss';

const Dashboard: React.FC = () => {
    return (
        <main>
            <section className={styles.overview}>
                <header>Dashboard</header>
                <div>
                    <p className={styles.dataRange}>01-26 November, 2021</p>
                </div>
            </section>
        </main>
    )
}

export default Dashboard;