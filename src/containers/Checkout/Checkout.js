import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { checkValidity } from '../../shared/utility';
import classes from './Checkout.module.css';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const Checkout = props => {

    // STATE

    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },

        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Contact No'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },

        address1: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Address Line 1'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false,
            touched: false
        },

        address2: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Address Line 2'
            },
            value: '',
            validation: {
                required: false,
            },
            valid: true,
            touched: false
        },

        city: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'City'
            },
            value: '',
            validation: {
                required: false,
            },
            valid: false,
            touched: false
        },
    })

    const [formIsValid, setFormIsValid] = useState(false);

    function inputChangedHandler(event, controlName) {

        const updatedControls = {
            ...orderForm,
            [controlName]: {
                ...orderForm[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, orderForm[controlName].validation),
                touched: true
            }
        }

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        setFormIsValid(formIsValid)
        setOrderForm(updatedControls)

    }

    const onFormSubmit = (event) => {
        event.preventDefault()
    }

    // LOGIC

    const formElementsArray = [];

    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
        />
    ))

    let redirect = null;

    if (!props.order || (props.order && Object.keys(props.order).length === 0)) {
        redirect = <Redirect to="/" />
    }

    let orderSummary = null
    if (props.order) {
        orderSummary = (
            <div className={classes.OrderSummary} >
                <h2>{props.order.productName}</h2>
                <h3>Quantity: {props.order.quantity}</h3>
                <h3>Total Price: {props.order.totalPrice}</h3>
            </div>
        )
    }
     

    return (
        <div className={classes.OrderForm} >
            {redirect}
            <h1>Checkout</h1>
            <form onSubmit={onFormSubmit} >
                {form}
                <h1>Order Summary</h1>
                {orderSummary}
                <Button disabled={!formIsValid} >Order</Button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        order: state.product.order
    }
}

export default connect(mapStateToProps)(Checkout);