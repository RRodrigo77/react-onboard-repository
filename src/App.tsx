import { useEffect, useState } from 'react'

import { CardRepo, IRepor, IGitnome } from './components'

import './App.css';


function App() {
    
    const [gitnome, setGitnome] = useState<IGitnome[]>([])
    
    const [input, setInput] = useState('')

    function handleAdd() {
         
    }
    useEffect(() =>  {
        fetch(`https://api.github.com/users/mathlima1`)
            .then(result => result.json())
            .then((dadosTop) => setGitnome(dadosTop))
            .catch(error => console.log(error))
    }, [])

    const [repositories, setRepositories] = useState<IRepor[]>([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${input}!/repos`)
            .then(result => result.json())
            .then((dados) => setRepositories(dados))
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            <div>
                <div className='cardTop'>
                    <legend>Pesquisar repositórios:</legend>
                    <div className='ImputCard'>
                        <input type="text" value={input} onChange={Event => setInput(Event.target.value)} placeholder='Pesquisar pelo github' />
                        <button type='button' >Pesquisar</button>
                    </div>
                </div>
            </div>
            <div className='cardWrap'>
                {repositories.map((repo) => (
                    <CardRepo
                        key={repo.id}
                        repo={repo}
                    />
                ))}
            </div>
        </>
    );
}

export default App;