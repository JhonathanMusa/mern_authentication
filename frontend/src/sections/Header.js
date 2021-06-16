import React, { useContext } from 'react'
import { UserContext } from '../hooks/UserContext'
import useLogout from "../hooks/useLogout"
import InlineButton from '../components/InlineButton'

export default function Header() {
    const { user } = useContext(UserContext)
    const { logoutUser } = useLogout()
    return (
        <Header>
            {user ? <> Hello, {user.name}.
                <InlineButton name={'logout'} handleClick={logoutUser} />
            </> : <div className="btnGroup">
                
                </div>}
        </Header>
    )
}
