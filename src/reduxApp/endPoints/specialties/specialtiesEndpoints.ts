import { baseApi } from "@/reduxApp/baseApi"



const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    postSpecialties: build.mutation({
        query: (data) => ({
            url         : '/specialty/create',
            method      :"POST",
            contentType : "multipart/form-data",
            data
        }),
    }),

  }),
  // overrideExisting: false,
})

export const { 
    usePostSpecialtiesMutation
} = specialtiesApi