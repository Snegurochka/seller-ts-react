import React from 'react';
import styles from './Dashboard.module.scss';

import Chart from './../Chart/Chart';

const Dashboard: React.FC = () => {
    return (
        <main>
            <section className={styles.overview}>
                <header>Dashboard</header>
                <Chart />
            </section>
        </main>
    )
}

export default Dashboard;