import styles from './25Things.module.css';
import Box from './Box';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

interface BoxProps {
    setBoxNumber: (boxNumber: number) => void;
    setBackButtonClicked: (backButtonClicked: boolean) => void;
}

function AllBoxes({ setBoxNumber, setBackButtonClicked }: BoxProps) {
    return (
        <div className={styles.allBoxes}>
            <h1>25 reminders just for you</h1>
            <div>
                {numbers.map((number) => {
                    return (
                        <Box key={number} boxNumber={number} setBoxNumber={setBoxNumber} setBackButtonClicked={setBackButtonClicked} />
                    );
                })}
            </div>
        </div>
    );
}

export default AllBoxes;