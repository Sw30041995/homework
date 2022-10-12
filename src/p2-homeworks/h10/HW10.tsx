import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setInterval(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading ?
                <div><img style={{width: '100px', height: '100px'}}
                          src="https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1-1.gif" alt="loading"/>
                </div> : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
