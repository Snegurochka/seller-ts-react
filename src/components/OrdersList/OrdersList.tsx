import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
//import { OrderType } from "../../redux/types/types";
// import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';

const OrdersList: React.FC = () => {
    const { getOrders } = useActions();
    //const [orders, setOrders] = useState<Array<OrderType> | null>(null);
    //const {orders} = useTypedSelector((state) => state.orders);

    // useEffect(() => {
    //     console.log(orders);
    // }, []);

    useEffect(() => {
        const firstOrders = getOrders();
        console.log(firstOrders);
        
        //setOrders(firstOrders);
    }, []);

    return (
        <Layout header='Orders' classPage='orders'>
            <div className="ws_tbl ws-card">
                <div className="ws_tbl__header">
                    <div>#Order</div>
                    <div>Product</div>
                    <div>Customer</div>
                    <div>Status</div>
                    <div>Date</div>
                    <div>Actions</div>
                </div>
                <div className="ws_tbl__body">
                    order tables
                </div>
            </div>

        </Layout>
    )
}

export default OrdersList;