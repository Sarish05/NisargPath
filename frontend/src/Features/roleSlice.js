import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAdmin : false,
    isAuthenticated : false,    
}


export const roleSlice = createSlice({
    name : 'role',
    initialState,
    reducers: {
        setIsAdmin : (state,action)=>{
            state.isAdmin = action.payload;
        },
        setIsAuthenticated : (state,action) =>{
            state.isAuthenticated = action.payload;
        }
    }
})

export const {setIsAdmin,setIsAuthenticated} = roleSlice.actions;

export default roleSlice.reducer;
