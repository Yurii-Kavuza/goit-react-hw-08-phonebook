import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contacts', // key in state
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63fa83cfbeec322c57f469a3.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: `/contacts`,
        method: "POST",
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const { 
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation
} = contactsApi;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(values) {
//         const { name, number } = values;
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;
