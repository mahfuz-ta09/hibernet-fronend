import { baseApi } from "@/reduxApp/baseApi"

const courseApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getCourse: build.query<any, void>({
            query: () =>({
                url    : '/course/all',
                method : 'GET'
            }),
            providesTags: ["course"]
        }),


        getSingleCourse: build.query<any, string>({
            query: (id:string) =>({
                url    : `/course/single/${id}`,
                method : 'GET'
            }),
            providesTags: ["course"]
        }),


        deleteCourse: build.mutation<any, string>({
          query: (id:string) =>({
            url    : `/course/delete/${id}`,
            method : 'DELETE',
          }),
          invalidatesTags: ["course"]
        }),


        createCourse: build.mutation({
            query: (data) => ({
              url         : '/course/create',
              method      : "POST",
              contentType : "multipart/form-data",
              data
            }),
            invalidatesTags: ["course"]
        }),


        updateCourse: build.mutation<any, { data: any, id: string }>({
            query: ({ data , id }) => ({
              url         : `/course/update/${id}`,
              method      : "PATCH",
              contentType : "multipart/form-data",
              data
            }),
            invalidatesTags: ["course"]
        }),


        enroleCourse: build.mutation<any, { data: any, id: string }>({
            query: ({ data , id }) =>({
                url         : `/course/enrol/${id}`,
                method      : "POST",
                data
            }),
        }),

    }),
})

export const {
    useGetSingleCourseQuery,
    useGetCourseQuery,
    useCreateCourseMutation,
    useDeleteCourseMutation,
    useUpdateCourseMutation,
    useEnroleCourseMutation
} = courseApi