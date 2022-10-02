import React from "react";
import classNames from "classnames/bind";
import styles from "../userlist.module.scss";
import {IUserType} from "../../../types";
const cx = classNames.bind(styles)

interface PageProps {
    item: IUserType
}

const UserCard:React.FC<PageProps> = ({item}) => {
    return <>
        <section className={cx('user-card_avatar')}>
            <img src={item.avatar_url} alt={item.login}/>
        </section>
        <section>
            <h5 className={cx('user-card_name')}>{item.login}</h5>
            <p className={cx('user-card_type')}>{item.type}</p>
        </section>
    </>
}

export default UserCard;