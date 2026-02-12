import React from 'react';
import styles from './25Things.module.css';
import Reminders from './Reminders';

interface BoxProps {
    boxNumber: number;
    setBackButtonClicked: (backButtonClicked: boolean) => void;
}

function ShowReminder({ boxNumber, setBackButtonClicked }: BoxProps) {
    return (
        <div className={styles.reminderContainer}>
            <div className={styles.reminderCard}>
                <h1>Reminder #{boxNumber}</h1>
                <p>{Reminders[boxNumber - 1]}</p>
                <button
                    className={styles.backButton}
                    onClick={() => setBackButtonClicked(false)}
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default ShowReminder;