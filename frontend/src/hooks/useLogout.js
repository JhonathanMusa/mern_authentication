import { useHistory } from "react-router-dom"
import Axios from "axios"

export default function useLogout() {
    let history = useHistory()

    const logoutUser = async () => {
        try {
            await Axios({
                method: 'GET',
                url: `auth/logout`
            }).then(res => {
                console.log(res);
                history.push('/')
            })
        } catch (err) {
            console.log(err);
        }
    }


    return { logoutUser }
}
