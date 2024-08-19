import { baseApi } from "@/reduxApp/baseApi";


const createAdminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        createAdmin:  build.mutation({
            query: (data) => ({
                url         : '/s-admin/create',
                method      : "POST",
                contentType : "multipart/form-data",
                data
            }),
            // invalidatesTags: ["course"]
        }),

        updateAdminStatus: build.mutation({
            query: ({status,id}) =>({
                url: `/s-admin/update/${status}/${id}`,
                method: 'PATCH',
            }),
            // invalidatesTags: ["course"]
        }),


        getAllAdmin: build.query<any, void>({
            query: () => ({
                url: '/s-admin/all/admin',
                method: 'GET'
            }),
            // invalidatesTags: ["course"]
        })
    })
})


export const {
    useCreateAdminMutation,
    useUpdateAdminStatusMutation,
    useGetAllAdminQuery,
} = createAdminApi