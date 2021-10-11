import React from "react";
import styles from './BlockOverview.module.scss';

import optionIcon from "../../img/menuIcon.png";

interface PropsType {
    header: string,
}

const BlockOverview: React.FC<PropsType> = ({ header, children }) => {
    return (
        <section className={styles.wrapper}>
            <header>
                <span className={styles.title}>{header}</span>
                <button>
                    <img
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