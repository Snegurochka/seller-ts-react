import React from 'react';
import styles from './Dashboard.module.scss';

import Layout from './../Layout/Layout';
import Chart from './../Chart/Chart';
import BlockOerview from './../BlockOerview/BlockOerview';

const Dashboard: React.FC = () => {
    return (
        <Layout header='Dashboard' classPage='dashboard'>
            <div className={styles.overview}>
            <Chart />

            <BlockOerview header='Today'>
                text
            </BlockOerview>
            </div>
        </Layout>
    )
}

export default Dashboard;