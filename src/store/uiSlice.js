import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {isShowCart: false, notification: null},
    reducers: {
        toggleShow (state,action) {
            state.isShowCart = !state.isShowCart
        },
        showNotification (state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiAction = uiSlice.actions
export default uiSlice;
