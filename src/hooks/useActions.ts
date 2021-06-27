import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionOrderCreators } from "./../redux/actions/order-actions";


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionOrderCreators, dispatch);
}