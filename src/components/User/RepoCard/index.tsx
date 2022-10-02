import React from "react";
import {IRepoType} from "../../../types";
import classNames from "classnames/bind";
import styles from "./repository.module.scss"

const cx = classNames.bind(styles)

interface Props {
    repo?: IRepoType,
    ref?: any
}

const RepoCard:React.FC<Props> = ({repo}) => {
    return (
        <div className={cx('repo')}>
            <h4>{repo?.name}</h4>
            <hr className={cx('divider')}/>
            <p>{repo?.description ? repo?.description : 'Description is missing.'}</p>
        </div>
    )
}

export default RepoCard;