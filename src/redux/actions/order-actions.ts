import { Dispatch } from "react";
import { OrderType } from "../types/types";
import { ActionsTypes } from "./actionsType";
import { OrdersApi } from "../../api/api";


type dispatchOrdStatusType = { type: ActionsTypes.CHANGE_ORD_ST, id: number };
type viewOrdType = { type: ActionsTypes.VIEW_ORD, id: number };
type setOrdersType = { type: ActionsTypes.SET_ORD, orders: Array<OrderType> };
type setCurrentPageType = { type: ActionsTypes.SET_CURRENT_PAGE, currentPage: number };
type setIsFetchingType = { type: ActionsTypes.TOGLE_IS_FETCHING, isFetching: boolean };
type toggleIsStatusFetchingType = { type: ActionsTypes.TOGLE_IS_STATUS_FETCHING, isFetching: boolean | Array<number>, idOrder: number };

export type ordersActionTypes = dispatchOrdStatusType
    | viewOrdType
    | setOrdersType
    | setCurrentPageType
    | setIsFetchingType
    | toggleIsStatusFetchingType

// const dispatchOrdStatus = (id: number): dispatchOrdStatusType => ({ type: ActionsTypes.CHANGE_ORD_ST, id });
// const viewOrd = (id: number): viewOrdType => ({ type: ActionsTypes.VIEW_ORD, id });
const setOrders = (orders: Array<OrderType>): setOrdersType => ({ type: ActionsTypes.SET_ORD, orders });
//const setCurrentPage = (currentPage: number): setCurrentPageType => ({ type: ActionsTypes.SET_CURRENT_PAGE, currentPage });
const setIsFetching = (isFetching: boolean): setIsFetchingType => ({ type: ActionsTypes.TOGLE_IS_FETCHING, isFetching });
//const toggleIsStatusFetching = (isFetching: boolean | Array<number>, idOrder: number): toggleIsStatusFetchingType => ({ type: ActionsTypes.TOGLE_IS_STATUS_FETCHING, isFetching, idOrder });

const getOrders = () => async (dispatch: Dispatch<ordersActionTypes>) => {
    dispatch(setIsFetching(true));

    const data = await OrdersApi.getOrders();
    //console.log(data);
 
    dispatch(setIsFetching(false));
    dispatch(setOrders(data));
}

export const actionOrderCreators = {
    getOrders
}