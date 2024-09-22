const { createSlice } = require("@reduxjs/toolkit")
const initialState = {}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        user : (state, action) => {
            return action.payload
        }
    }
})

export const { user } = userSlice.actions
export default userSlice.reducer