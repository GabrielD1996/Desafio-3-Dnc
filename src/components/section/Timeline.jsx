import styles from './Timeline.module.css'
import React from 'react';


function Timeline() {
    return (
        <section>
            <div className={styles.title} id='timeline'>
                <h1>Sobre mim:</h1>
            </div>
            <div className={styles.verticalConfig}>
                <div className={styles.time}>
                    <div className={styles.pointTitle}>
                        <p>2021</p>
                        <p>2022</p>
                        <p>2023</p>
                        <p>2024</p>
                    </div> 
                </div>
                <div className={styles.lineConfig}>
                    <div className={styles.line}>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                    </div>
                </div>
                <div className={styles.general}>
                    <div className={styles.info}>
                        <div className={styles.infoText}>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className={styles.infoText}>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className={styles.infoText}>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className={styles.infoText}>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;