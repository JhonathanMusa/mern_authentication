import React, { useContext } from 'react'
import { UserContext } from "../hooks/UserContext"
import { Redirect } from "react-router-dom"
import Header from "../sections/Header"

export default function Landing() {
    const { user } = useContext(UserContext)
    if (user) {
        <Redirect to="/home" />
    }
    return (
        <div className="page">
            <Header />
            <h3>This is the public landing page</h3>
        </div>
    )
}
