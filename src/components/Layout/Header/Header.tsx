import React from "react";
import {ReactComponent as GitLogo} from "../../../assets/github-light.svg";
import classNames from "classnames/bind";
import styles from "../layout.module.scss";

const cx = classNames.bind(styles)

const Header:React.FC = () => {
    return (
        <div className={cx('top-bar')}>
            <GitLogo className={cx('top-bar_logo')}/>
            <h4>Github</h4>
        </div>
    )
}

export default Header;