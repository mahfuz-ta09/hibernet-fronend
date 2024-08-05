import { baseApi } from "@/reduxApp/baseApi"
import { spType } from "@/types/common";



const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    postSpecialties: build.mutation({
      query: (data) => ({
        url         : '/specialty/create',
        method      : "POST",
        contentType : "multipart/form-data",
        data
      }),
    }),

    getSpecialties: build.query<any, void>({
      query: () =>({
        url    : '/specialty/all',
        method : 'GET'
      }),
    }),

    deleteSpecialty: build.mutation<any, void>({
      query: (id) =>({
        url    : `/specialty/delete/${id}`,
        method : 'DELETE',
        contentType: ''
      }),
    }),


  }),
  overrideExisting: false,
})

export const { 
    usePostSpecialtiesMutation,
    useGetSpecialtiesQuery
} = specialtiesApi