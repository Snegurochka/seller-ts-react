import { Dispatch } from "react";
import { AuthApi } from "../../api/api";
import { ActionsTypes } from "./actionsType";

type setSellerDataType = {
    type: typeof ActionsTypes.SET_SELLER_DATA,
    data: authData
}

export type authData = {
    email: string,
}

export const setSellerData = (data:authData): setSellerDataType => ({ type: ActionsTypes.SET_SELLER_DATA, data });
export const getSellerData = () => async (dispatch: Dispatch<setSellerDataType>) => {
    const data = await AuthApi.auth()
    if (data.registered) {
        dispatch(setSellerData({ email: data.email }));
    }
}