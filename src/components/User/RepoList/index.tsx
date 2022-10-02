import React from "react";
import {IRepoType} from "../../../types";
import classNames from "classnames/bind";
import styles from "../user.module.scss";
import RepoCard from "../RepoCard";

const cx = classNames.bind(styles)

interface Props {
    repoList?: IRepoType[] | any[]
    repoListLoading: boolean
    repoListError: any
}

const RepoList:React.FC<Props> = ({repoList, repoListLoading, repoListError}:Props) => {

    return (
        <section className={cx('repo-list')}>
            {
                !repoListLoading && repoList?.map((repo: IRepoType) =>
                    <RepoCard repo={repo} key={repo?.id}/>
                ) || !repoList?.length && <>No repos here</>
                  || repoListError && repoListError
            }
        </section>
    )
}

export default RepoList;