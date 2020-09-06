import React, { useState } from 'react';

import classes from './Auth.module.css';
import { checkValidity } from '../../shared/utility';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import * as actions from '../../store/actions/';
import { connect } from 'react-redux';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const animationClasses = {
    enter: classes["fade-enter"],
    enterDone: classes["fade-enter-active"],
    exit: classes["fade-exit"],
    exitDone: classes["fade-exit-active"]
}

const Auth = props => {

    const [authForm, setAuthForm] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },

        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false,
            touched: false
        },
    })

    const [isSignUp, setIsSignUp] = useState(false);

    const switchAuthHandler = (event) => {
        event.preventDefault()
        setIsSignUp(isSignUp => !isSignUp);
    }

    function inputChangedHandler(event, controlName) {

        const updatedControls = {
            ...authForm,
            [controlName]: {
                ...authForm[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, authForm[controlName].validation),
                touched: true
            }
        }

        setAuthForm(updatedControls)

    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        props.authenticate(
            authForm.email.value,
            authForm.password.value,
            isSignUp
        )
    }

    const formElementsArray = [];

    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
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

    const ref = React.createRef(null)

    return (
        <SwitchTransition mode={"out-in"} >
            <CSSTransition nodeRef={ref} timeout={0} key={isSignUp ? "Sign In" : "Sign Up"} classNames={animationClasses} >
                <div ref={ref} className={classes.Auth} >
                    <h1>{isSignUp ? 'Create an account' : 'Sign in to Shop It'}</h1>
                    <h3>{isSignUp ? 'Already' : "Don't"} have an account? <a href="/" onClick={switchAuthHandler} >
                        {isSignUp ? 'Sign in' : 'Sign up'}</a></h3>
                    <form onSubmit={formSubmitHandler}>
                    {form}
                        <div className={classes.Button} >
                            <Button>{isSignUp ? 'Sign up' : 'Log in'}</Button>
                        </div>
                    </form>
                </div>
            </CSSTransition>
        </SwitchTransition>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (email, password, isSignUp) => dispatch(
            actions.auth(email, password, isSignUp)
        )
    }
}

export default connect(null, mapDispatchToProps)(Auth);