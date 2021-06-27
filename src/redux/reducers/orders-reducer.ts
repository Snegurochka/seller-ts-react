import { orderStatusesEnum} from "../../const";
import { ActionsTypes } from "../actions/actionsType";
import { ordersActionTypes } from "../actions/order-actions";
import { OrderType } from "../types/types";

export type InitStateType = {
    orders: Array<OrderType>,
    step: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    isStatusFetching: Array<number>,
}

const initState: InitStateType = {
    orders: [],
    step: 5,
    totalCount: 22,
    currentPage: 1,
    isFetching: true,
    isStatusFetching: [],
};

const ordersReducer = (state = initState, action: ordersActionTypes): InitStateType => {
    switch (action.type) {
        case ActionsTypes.CHANGE_ORD_ST:
            //console.log('TODO update status');
            return {
                ...state,
                orders: state.orders.map((order) => {
                    if (order.id === action.id) {
                        return {
                            ...order,
                            status: {
                                id: orderStatusesEnum.shippedId,
                                code: 'Shipped'
                            }
                        };
                    }
                    return order;
                })
            };
        case ActionsTypes.SET_ORD:
            return { ...state, orders: [...state.orders, ...action.orders] };
        case ActionsTypes.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case ActionsTypes.TOGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case ActionsTypes.TOGLE_IS_STATUS_FETCHING:
            return {
                ...state,
                isStatusFetching: action.isFetching
                    ? [...state.isStatusFetching, action.idOrder]
                    : state.isStatusFetching.filter((id) => id !== action.idOrder)
            };
        default:
            return state;
    }
}

export default ordersReducer;
