import React, { useEffect } from "react";

import { useActions } from './../../hooks/useActions';

const OrdersList: React.FC = () => {
    const { getOrders } = useActions();

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <div className="orders content_wrapper">
            <h3>Orders</h3>
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

        </div>
    )
}

export default OrdersList;