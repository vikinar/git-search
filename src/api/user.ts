import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IRepoType, IUserType} from "../types";

export interface Params {
    name: string
    page: any
}

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: (builder) => ({
        getUser: builder.query<IUserType, string>({
            query: (name) => `users/${name}`,
        }),
        getRepos: builder.query<IRepoType[], Params>({
            query: (args:Params) => `users/${args.name}/repos?page=${args.page}`
        })
    }),
})

export const {useGetUserQuery, useGetReposQuery} = userApi;