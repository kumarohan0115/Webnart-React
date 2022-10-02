import React from 'react'

const Tnslogin = () => {
    return (
        <>
            <div className="ma">

            {/* <form action="http://localhost:5001/api/v2/login_api" method="POST"> */}
            <form action="http://localhost:5001/api/v2/login_api" method="POST">
                <input type="text" name="username" id="username" placeholder='username' />

                <input type="text" name="password" id="password" placeholder='password' />

                <button type="submit"> submit </button>
            </form>
            </div>
        </>
    )
}

export default Tnslogin