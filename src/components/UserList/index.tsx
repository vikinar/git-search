import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import styles from './userlist.module.scss';
import classNames from "classnames/bind";
import {IUserType} from "../../types";
import {Link} from "react-router-dom";
import UserCard from "./UserCard";

const cx = classNames.bind(styles)

const UserList:React.FC = () => {
    const { userList } = useSelector((state: RootState) => state.userList);

    const handleClick = () => {
        window.sessionStorage.setItem("searchDetails", JSON.stringify(userList))
    }

    return (
        <>
            {!userList?.items.length && <section className={cx('user-list')}>
                    <h4>User list is empty.</h4>
                </section> ||
                <section className={cx('user-list')}>{userList?.items?.map((item: IUserType) =>
                    <Link className={cx('user-card')} key={item.id} to={`users/${item.login}`} onClick={handleClick}>
                        <UserCard item={item}/>
                    </Link>)}
                </section>
            }
        </>
    )
}

export default UserList;