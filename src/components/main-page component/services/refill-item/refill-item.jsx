import styles from './refill-item.module.css'
import { Link } from 'react-router-dom'

const RefillItem = () => {

    const image = require('../../../../images/refill/kyocera/TK-5220C.png')

    return (
        <div className={styles.box}>
            <h1 className={styles.title}>Заправка картриджей</h1>
            <div className={styles.refill_box}>
                <img className={styles.image} src={image} alt="zapravka" />
                <div className={styles.description_and_button}>
                    <p className={styles.description_refill}>
                        Заправка картриджей в нашей компании осуществляется с использованием тонеров лучших мировых производителей.
                        В процессе заправки каждый картридж тестируется на наличие дефектов, тщательно вычищается от старого содержимого, разбирается
                        и собирается без повреждения корпуса.<br />
                        Так же, возможна доставка от клиента и обратно.
                    </p>
                    <Link
                        className={styles.button}
                        to='/refill'
                    >Подробнее...
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RefillItem