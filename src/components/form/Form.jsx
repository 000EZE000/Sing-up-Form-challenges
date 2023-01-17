import React, { useState } from "react";

function Status({ body, status, booleanStatus }) {
    return !booleanStatus && status ? <p>{body}</p> : null
}

export default function Form() {
    const [valueInput, setValueInput] = useState({
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    })
    const [error, setError] = useState(false)

    const handleOnSubmit = (event) => {
        event.preventDefault()
        setError(true)
    }

    const handleOnChange = ({ target }) => {
        const { value, name } = target
        setValueInput({ ...valueInput, [name]: value })
    }
    return <section>
        <form onSubmit={handleOnSubmit}>
            <input
                placeholder=' First Name'
                type="text"
                value={valueInput.firstName}
                onChange={handleOnChange}
                name='firstName'
            />
            <Status
                body={'sol'}
                booleanStatus={valueInput.firstName}
                status={error}
            />
            <input
                placeholder=' Last Name'
                type="text"
                value={valueInput.lastName}
                onChange={handleOnChange}
                name='lastName'
            />
            <Status
                body={'sol'}
                booleanStatus={valueInput.lastName}
                status={error}
            />
            <input
                placeholder=' Email'
                type="text"
                value={valueInput.email}
                onChange={handleOnChange}
                name='email'
            />
            <Status
                body={'sol'}
                booleanStatus={valueInput.email}
                status={error}
            />
            <input
                placeholder=' Address'
                type="text"
                value={valueInput.address}
                onChange={handleOnChange}
                name='address'
            />
            <Status
                body={'sol'}
                booleanStatus={valueInput.address}
                status={error}
            />
            <input
                placeholder=' Password'
                type="text"
                value={valueInput.password}
                onChange={handleOnChange}
                name='password'
            />
            <Status
                body={'sol'}
                booleanStatus={valueInput.password}
                status={error}
            />
            <input
                type="submit" value="Claim your free trial" />
        </form>
        <p>
            By clicking the button, you are agreeing to our Terms and Services
        </p>
    </section>
}