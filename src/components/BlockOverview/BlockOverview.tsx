import React from "react";
import styles from './BlockOverview.module.scss';

import optionIcon from "../../img/menuIcon.png";

type PropsType = {
    header: string,
}

const BlockOverview: React.FC<PropsType> = ({ header, children }) => {
    return (
        <section className={styles.wrapper}>
            <header>
                <p className={styles.title}>{header}</p>
                <button>
                    <img
                        className={styles.option}
                        src={optionIcon}
                        alt="options"
                    />
                </button>
            </header>
            <div>
                {children}
            </div>
        </section>
    )
}

export default BlockOverview;