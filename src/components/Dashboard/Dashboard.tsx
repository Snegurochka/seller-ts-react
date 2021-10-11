import React from 'react';
import styles from './Dashboard.module.scss';
import cartIcon from '../../img/cartIcon.svg';

// moc
import { LastOrdersMoc } from './../../redux/moc/moc';

// Components
import Layout from './../Layout/Layout';
import Chart from './../Chart/Chart';
import BlockOerview from '../BlockOverview/BlockOverview';



const Dashboard: React.FC = () => {
    return (
        <Layout header='Dashboard' classPage='dashboard'>
            <div className={styles.overview}>
                <Chart />

                <BlockOerview header='Last orders'>
                    <ul>
                        {LastOrdersMoc.map((item) => (
                            <li className={styles.item} key={item.id}>
                                <div className={styles.itemLeft}>
                                    <div
                                        style={{ backgroundColor: '#80ceca' }}
                                        className={styles.itemLabel}
                                    >
                                        <img src={cartIcon} alt={item.product} />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <p className={styles.itemTitle}>
                                            Product: {item.product}
                                        </p>
                                        <p className={styles.itemTime}>
                                            {item.date} • {item.location}
                                        </p>
                                    </div>
                                </div>
                                <p className={styles.itemPrice}>
                                    {item.price.toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>
                </BlockOerview>
            </div>
        </Layout>
    )
}

export default Dashboard;