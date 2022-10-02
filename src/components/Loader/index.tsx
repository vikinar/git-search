import classNames from "classnames/bind";
import styles from "./loader.module.scss"
const cx = classNames.bind(styles)

const Loader = () => {
    return (
        <div className={cx('spinner')}></div>
    )
}

export default Loader;