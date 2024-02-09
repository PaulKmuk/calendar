import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   user: null,
   // user: {
   //    id: 1,
   //    username: 'marek',
   //    password: '123',
   //    email: 'marek@gmail.com'
   // },
   users: [
      {
         id: 1,
         username: 'marek',
         password: '123',
         email: 'marek@gmail.com',
         event: []
      },
      {
         id: 2,
         username: 'Anna',
         password: 'haslo123',
         email: 'anna@gmail.com',
         event: []
      },
   ],
   errorMsg: null
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action) => {
         const userLogin = state.users
            .find(el => el.username === action.payload.username && el.password === action.payload.password)

         if(userLogin) {
            state.user = userLogin
            console.log("Login succes");
            state.errorMsg = null
            let { password, ...other} = userLogin
            const userJSON = JSON.stringify(other)
            localStorage.setItem("user", userJSON)
         } else {
            state.errorMsg = "Nieprawidłowy login lub hasło!"
            console.log("Login failed");
         }
      },
      logout: (state, action) => {
         state.user = null
         localStorage.setItem("user", null)
      },
      register: (state, action) => {
         state.users.push(action.payload)
      }
   }
})

export const { login, logout, register } = authSlice.actions

export default authSlice.reducer