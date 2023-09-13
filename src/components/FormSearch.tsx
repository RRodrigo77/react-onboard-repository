import { ReactElement } from "react"

import { IPesquisa } from "./IPesquisa"

interface IFormProps {
    pesquisa: IPesquisa
}

const FormSearch = (): ReactElement =>  {
    return(
        <div>
            <label htmlFor="search">Pesquisar</label>
        </div>
    )
}

export { FormSearch }