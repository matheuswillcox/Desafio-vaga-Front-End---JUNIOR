import axios from "axios";
import {StateTypes} from "../../components/form/Form.types"


const settings = {
    baseURL : "https://frontend-challenge-7bu3nxh76a-uc.a.run.app"
}

const installmentsAnticipationApi = () => {
    const {baseURL} = settings
    return axios.create({baseURL})

}

export const installmentsAnticipationService = {
    post: (payload: StateTypes)=> installmentsAnticipationApi().post("/", payload)
}

