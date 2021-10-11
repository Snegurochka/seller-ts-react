import React from 'react';
import styles from './Dashboard.module.scss';

import Chart from './../Chart/Chart';
import BlockOerview from './../BlockOerview/BlockOerview';

const Dashboard: React.FC = () => {
    return (
        <main>
            <section className={styles.overview}>
                <header>Dashboard</header>
                <Chart />

                <BlockOerview header='Today'>
                    text
                </BlockOerview>
            </section>
        </main>
    )
}

export default Dashboard;