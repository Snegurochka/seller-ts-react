import React from 'react';
import styles from './Dashboard.module.scss';
import cartIcon from '../../img/cartIcon.svg';

// moc
import { LastOrdersMoc, salesMoc } from './../../redux/moc/moc';

// Components
import Layout from './../Layout/Layout';
import Chart from './../Chart/Chart';
import BlockOverview from '../BlockOverview/BlockOverview';
import BlockProgress from '../BlockProgress/BlockProgress';



const Dashboard: React.FC = () => {
    return (
        <div className={styles.wrapp}>
            <Layout header='Dashboard' classPage='dashboard'>
                <div className={styles.overview}>
                    <Chart />

                    <BlockOverview header='Last orders'>
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
                                            <span className={styles.itemTime}>
                                                {item.date} • {item.location}
                                            </span>
                                        </div>
                                    </div>
                                    <span className={styles.itemPrice}>
                                        {item.price.toFixed(2)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </BlockOverview>
                </div>
            </Layout>
            <aside className={styles.asideOverview}>
                <BlockProgress header='Sales' data={salesMoc} />
            </aside>
        </div>
    )
}

export default Dashboard;