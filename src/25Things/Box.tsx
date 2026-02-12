import styles from './25Things.module.css';

interface BoxProps {
    boxNumber: number;
    setBoxNumber: (boxNumber: number) => void;
    setBackButtonClicked: (backButtonClicked: boolean) => void;
}

function Box({ boxNumber, setBoxNumber, setBackButtonClicked }: BoxProps) {
    return (
        <div className={styles.box}>
            <button onClick={() => { setBoxNumber(boxNumber); setBackButtonClicked(true); }}>{boxNumber}</button>
        </div>
    );
}

export default Box;