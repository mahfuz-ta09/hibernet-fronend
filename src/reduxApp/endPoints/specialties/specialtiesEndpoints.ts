import { baseApi } from "@/reduxApp/baseApi"


const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    postSpecialties: build.mutation({
      query: (data) => ({
        url         : '/specialty/create',
        method      : "POST",
        contentType : "multipart/form-data",
        data
      }),
      invalidatesTags: ["specialty"]
    }),

    getSpecialties: build.query<any, void>({
      query: () =>({
        url    : '/specialty/all',
        method : 'GET'
      }),
      providesTags: ["specialty"]
    }),

    deleteSpecialty: build.mutation<any, string>({
      query: (id) =>({
        url    : `/specialty/delete/${id}`,
        method : 'DELETE',
        contentType: ''
      }),
      invalidatesTags: ["specialty"]
    }),

  }),
  overrideExisting: true,
})

export const { 
    usePostSpecialtiesMutation,
    useGetSpecialtiesQuery,
    useDeleteSpecialtyMutation
} = specialtiesApi