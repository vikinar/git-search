import React, {useEffect, useRef} from "react";
import {IRepoType, IUserType} from "../../types";
import classNames from "classnames/bind";
import styles from "./user.module.scss";
import RepoList from "./RepoList";
import useIntersectionObserver from "../../hooks/IntersectionObserver";
import {useDispatch} from "react-redux";
import {nextPage, reset} from "../../store/pagination";
import userList from "../UserList";
import Loader from "../Loader";

const cx = classNames.bind(styles)

interface Props {
    user: IUserType
    isLoading: boolean
    error: any
    repoList?: IRepoType[]
    repoListLoading: boolean
    repoListError: any
}

const User:React.FC<Props> = (
    {user, isLoading, error, repoList, repoListLoading, repoListError}: Props
) => {

    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = !!entry?.isIntersecting

    const dispatch = useDispatch()

    useEffect(() => {
        if(isVisible && repoList && repoList?.length > 0 && user.public_repos && repoList?.length < user?.public_repos){
            dispatch(nextPage())
        }
    }, [isVisible, dispatch])

    return (
        <>
            {!isLoading ? <article className={cx('user')}>
                <section className={cx('user_img')}>
                    <img src={user?.avatar_url} alt={user?.name}/>
                </section>
                <section className ={cx('user_info')}>
                    <h2>{user?.name || user?.login}</h2>
                    <p>{user?.bio}</p>
                    <p>{user?.company}</p>
                    <p>{user?.email}</p>
                    <p>Followers ∙ {user?.followers}</p>
                    <p>Following ∙ {user?.following}</p>
                    {user?.blog && <p>Blog ∙ <a href={user?.blog} target="_blank">{user?.blog}</a></p>}
                    <p>Created at ∙ {user?.created_at}</p>
                    <p>Location ∙ {user?.location}</p>
                </section>
            </article> : <>
                    <div ref ={ref}>
                        <Loader />
                    </div>
                </>
                || error && <>Something went wrong!</>}
            <h4 style={{alignSelf: 'flex-start', marginTop: '2rem'}}>Public repositories ∙ {user.public_repos}</h4>
            <RepoList
                repoList={repoList}
                repoListLoading={repoListLoading}
                repoListError={repoListError}
            />
            {
                (repoList && (user?.public_repos && repoList?.length < user?.public_repos)) &&
                <div ref ={ref}>
                    <Loader />
                </div>
            }
        </>
    )
}

export default User;