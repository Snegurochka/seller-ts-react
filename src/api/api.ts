import { url, authUrl, orderStatusesEnum } from "../const";
//import { OrderType } from "../redux/types/types";


export const OrdersApi = {
    async getOrders() {
        const response = await fetch(`${url}orders.json`);
        return response.json();
    },

    async getOrderById(id: number) {
        const resp = await fetch(`${url}orders/${id}.json`);
        return resp.json();
    },

    async changeOrdStatus(id: number) {
        const qUrl = `${url}orders/${id}/status/.json`;
        try {
            await fetch(qUrl, {
                method: 'PATCH',
                body: JSON.stringify({ id: orderStatusesEnum.shippedId, code: 'Shipped' }),
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export const AuthApi = {
    async auth() {
        const authData = {
            email: 'demo@demo.com',
            password: '11111d',
            returnSecureToken: true,
        };

        try {
            const resp = await fetch(authUrl, {
                method: 'POST',
                body: JSON.stringify(authData),
            });

            return resp.json();
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

export const ProfileApi = {
    async getsellerProfile() {
        const id = 1;

        try {
            const resp = await fetch(`${url}sellers/${id}.json`);
            return resp.json();
        } catch (e) {
            console.log(e);
            return false;
        }
    },

    async updateSellerDescription(description: string) {
        const qUrl = `${url}sellers/1/.json`;
        try {
            await fetch(qUrl, {
                method: 'PATCH',
                body: JSON.stringify({ description: description }),
            });
        } catch (e) {
            console.log(e);
        }
    }
}