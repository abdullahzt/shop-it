import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import classes from './Orders.module.css';
import * as actions from '../../store/actions/';

import ImageLoading from '../../components/UI/CustomLoading/ImageLoading';
import Order from '../../components/Order/Order';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

const Orders = props => {

    const { fetchOrders, token, userID, orders, loading } = props

    const [showModal, setShowModal] = useState(false)

    let orderIdToDelete = null;

    useEffect(() => {
        fetchOrders(token, userID)
    }, [ fetchOrders, token, userID ])

    const cancelButtonTapped = orderID => {
        setShowModal(true)
        orderIdToDelete = orderID;
    }

    const onModalClose = () => {
        setShowModal(false)
    }

    const onNoClick = () => {
        setShowModal(false)
    }

    const onYesClick = () => {
        setShowModal(false)
        
    }

    let displayOrders = (
        <React.Fragment>
            {orders && orders.map(order => (
                <Order 
                    key={order.key}
                    name={order.productName}
                    quantity={order.quantity}
                    price={order.totalPrice}
                    onCancelClick={cancelButtonTapped.bind(this, order.key)}
                />
            ))}
        </React.Fragment>
    )

    if (loading) {
        displayOrders = <ImageLoading />
    }

    if (orders && !loading && orders.length === 0) {
        displayOrders = <h2 className={classes.NoOrder} >No Orders to show.</h2>
    }

    return (
        <div className={classes.Orders} >
            <ConfirmationModal
                modalClosed={onModalClose} 
                show={showModal}
                onNoClick={onNoClick}
                onYesClick={onYesClick}
            >
                Are you sure you want to cancel this order ?
            </ConfirmationModal>
            {displayOrders}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        userID: state.auth.userID,
        token: state.auth.token,
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (token, userID) => dispatch(
            actions.fetchOrders(token, userID)
        ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);