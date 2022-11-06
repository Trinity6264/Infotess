import { createSlice } from '@reduxjs/toolkit'


const PostSlice = createSlice({
    name: 'post',
    initialState: [],
    reducers: {
        find: (state, action) => {
            return state = action.payload;
        }
    }
})

export const postSelector = (state) => state.post;

export const { find } = PostSlice.actions;

export default PostSlice.reducer;