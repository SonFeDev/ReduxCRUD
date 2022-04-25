
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async () => {
        const res = await axios.get('http://localhost:3001/userNames')
        return res.data
    }
)

export const addUsers = createAsyncThunk(
    "users/addUsers",
    async (user) => {
        const res = await axios.post('http://localhost:3001/userNames', user)
        return user
    }
)

export const deleteUsers = createAsyncThunk(
    "users/deleteUsers",
    async (id) => {
        const res = await axios.delete('http://localhost:3001/userNames/' + id)
        console.log(res);
        return id
    }
)

export const editUsers = createAsyncThunk(
    "users/editUsers",
    async (newUser) => {
        const res = await axios.put('http://localhost:3001/userNames/' + newUser.idUser, newUser)
        console.log(newUser.idUser);
        return newUser
    }
)

export const userSlice = createSlice(({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        status: '',
        statusAdd: 'idle',
    },
    reducers: {
        resetStatusAdd: (state) => {
            console.log("resetting");
            state.statusAdd = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload
        })

        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
        })

        builder.addCase(addUsers.pending, (state, action) => {
            state.statusAdd = 'loading';
        })

        builder.addCase(addUsers.fulfilled, (state, action) => {
            state.statusAdd = 'done';

        })

        builder.addCase(addUsers.rejected, (state, action) => {
            state.loading = false;
            state.status = 'error'
        })

        builder.addCase(deleteUsers.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(deleteUsers.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload);
            var newArray = state.users.filter((user) => {
                return user.id !== action.payload
            })
            state.users = newArray

        })

        builder.addCase(deleteUsers.rejected, (state, action) => {
            state.loading = false;

        })

        builder.addCase(editUsers.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(editUsers.fulfilled, (state, action) => {
            state.statusAdd = 'done';

        })

        builder.addCase(editUsers.rejected, (state, action) => {
            state.loading = false;
            state.status = 'error'
        })


    }

}));

export const { resetStatusAdd } = userSlice.actions
export default userSlice.reducer;

