import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Word } from '../../types/api';

export const SearchApi = createApi({
    reducerPath: 'searchAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.dictionaryapi.dev/api/v2/'
    }),
    endpoints: (builder) => ({
        getWord: builder.query<Word[], string>({
            query: (data) => `entries/en/${data}`
        })
    })
});

export const { useGetWordQuery, useLazyGetWordQuery } = SearchApi;