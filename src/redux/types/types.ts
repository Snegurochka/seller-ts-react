import { orderStatusesEnum } from "../../const";

export type OrderType = {
    id: number,
    customer: string,
    product: string,    
    ref: string,
    status: OrderStatusType
};

export type OrderStatusType = {
    id: orderStatusesEnum,
    code: string
}

export type UserType = {
    id: number,
    name: string,
}