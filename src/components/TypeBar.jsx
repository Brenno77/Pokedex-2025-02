import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api-fetch"

export default function Typebar() {
    const [types, setTypes] = useState([])

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const tiposAPI = await apiFetch('/type');
        setTypes(tiposAPI.results);
    }

    return (
        types.map((tipoCorrenteDoFor) => {
            return (
                <div key={tipoCorrenteDoFor.name}>
                    <br />
                    <label>{tipoCorrenteDoFor.name}</label>
                </div>
            )
        })
    )
}