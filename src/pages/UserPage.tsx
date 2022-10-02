import {useGetReposQuery, useGetUserQuery} from "../api/user";
import {useLocation} from "react-router-dom";
import User from "../components/User";
import NotFound from "./NotFound";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useEffect, useState} from "react";
import {IRepoType} from "../types";
import {reset} from "../store/pagination";

const UserPage = () => {

    const location = useLocation();
    const splitLocation = location.pathname.split('/')
    const userLogin = splitLocation[splitLocation.length-1]
    const {isLoading, data, error} = useGetUserQuery(userLogin)
    const page = useSelector((state: RootState) => state.pagination).page
    const {isLoading: isLoadingRepos, data: repoData, error: repoError} = useGetReposQuery({name: userLogin, page: page})
    const [repoList, setRepoList] = useState<IRepoType[]>([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reset())
    }, [])

    useEffect(() => {
        repoData !== undefined && setRepoList(prev => [...new Set([...prev, ...repoData])])
    }, [page, repoData])

    return (
        <>
            {data !== undefined ? <User
                user = {data}
                error={error}
                isLoading={isLoading}
                repoList = {repoList}
                repoListLoading = {isLoadingRepos}
                repoListError = {repoError}
            /> : data !== undefined && !isLoading && <NotFound/>}
        </>
    )
}

export default UserPage;