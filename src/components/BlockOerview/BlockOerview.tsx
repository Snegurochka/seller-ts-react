import React from "react";
import styles from './BlockOerview.module.scss';

import optionIcon from "../../img/menuIcon.png";

type PropsType = {
    header: string,
}

const BlockOerview: React.FC<PropsType> = ({ header, children }) => {
    return (
        <section>
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
            <div>{children}</div>
        </section>
    )
}

export default BlockOerview;