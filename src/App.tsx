import { useEffect, useState } from 'react'

import { CardRepo, IRepor } from './components'

import './App.css';

function App() {
    const [repositories, setRepositories] = useState<IRepor[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/RRodrigo77/repos')
            .then(result => result.json())
            .then((dados) => setRepositories(dados))
            .catch(error => console.log(error))
            
    }, [])
    
    
    return (
        <>
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