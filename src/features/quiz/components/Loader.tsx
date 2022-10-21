import styles from '../Quiz.module.css'
import {Car} from './Car';

export const Loader = () => {
    return <div className={`${styles.loader} card `}>
        <Car/>
    </div>
}