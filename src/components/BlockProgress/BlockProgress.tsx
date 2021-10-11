import React from "react";
import styles from './BlockProgress.module.scss';

interface ProgressData {
    label: string,
    value: number,
}

interface PropsType {
    header: string,
    data: ProgressData[]
}

const BlockProgress: React.FC<PropsType> = ({ header, data }) => {
    const sum = data.reduce((prev, current) => (prev + current.value), 0);
    return (
        <section className={styles.wrapper}>
            <header>
                <span className={styles.title}>{header}</span>
            </header>
            <ul>
                {data.map((item, ind) => (
                    <li key={ind}>
                        <div className={styles.label}>
                            <span className={styles.labelTitle}>
                                {item.label}
                            </span>
                            <span className={styles.value}>
                                {item.value}
                            </span>
                        </div>
                        <div className={styles.bar}>
                    <div
                      style={{width: `${(item.value / sum) * 100}%`,}}
                      className={styles.coloredBar}
                    ></div>
                  </div>
                  </li>
                ))}
            </ul>
        </section>
    )
}

export default BlockProgress;