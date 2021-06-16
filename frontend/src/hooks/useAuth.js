import { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import { UserContext } from './UserContext'
import Axios from "axios"


export default function useAuth() {
    let history = useHistory()
    const { setUser } = useContext(UserContext)

    const [error, setError] = useState(null)


    // set user
    const setUserContext = async () => {
        return await Axios.get("/user").then(res => {
            setUser(res.data.currentUser)
            history.push("/home")
        }).catch((err) => {
            setError(err.response.data)
        })
    }

    // register user 
    const registerUser = async (data) => {
        console.log(data);
        const { username, email, password, passwordConfirm } = data
        return Axios.post('/auth/register', {
            username,
            email,
            password,
            passwordConfirm
        }).then(async () => {
            await setUserContext()
        }).catch((err) => {
            return setError(err.response.data)
        })
    }

    // login user
    const loginUser = async (data) => {
        const { username, password } = data
        return Axios.post('/auth/login', {
            username, password
        }).then(async () => {
            await setUserContext()
        }).catch((err) => {
            setError(err.response.data)
        })
    }

    return { error, registerUser, loginUser }
}
