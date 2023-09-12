import { ReactElement } from "react"

import { IRepor } from "./IRepoInterface"

interface IRepoProps {
    repo: IRepor
}

const CardRepo = (props: IRepoProps): ReactElement => {
    return (
        <div className="card">
            <span> Nome: {props.repo.name}</span>
            <span> Nome completo: {props.repo.full_name}</span>
            <span> Descrição: {props.repo.description}</span>
        </div>
    )
}

export { CardRepo }