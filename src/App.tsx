import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import { CardRepo, IRepor } from './components';

import './App.css';


function App() {



    //const [inputext, setInputext] = useState('RRodrigo77')
    const [input, setInput] = useState('RRodrigo77')

    function handleAdd() {
        setInput(input)
        setInput('')
    }



    const [repositories, setRepositories] = useState<IRepor[]>([])

    useEffect(() => {        
            fetch(`https://api.github.com/users/${input}/repos`)
                .then(result => result.json())
                .then((dados) => setRepositories(dados))
                .catch(error => console.log(error))        
    }, [input])


    return (
        <>
            <div>
                <div className='cardTop'>
                    <legend>Pesquisar repositórios:</legend>
                    <div className='ImputCard'>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Pesquisar pelo github' />
                        <Button
                            variant="primary"
                            onClick={handleAdd}
                        >
                            Pesquisar
                        </Button>
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