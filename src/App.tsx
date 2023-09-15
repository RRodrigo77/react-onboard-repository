import { useEffect, useState,KeyboardEvent } from 'react';
import { CardRepo, IRepor } from './components';
import './App.css';

function App() {
    const [input, setInput] = useState('RRodrigo77');
    const [inputText, setInputText] = useState(''); // Estado para armazenar o valor da string a ser inserida

    function handleAdd() {
        setInput(inputText); // Define o valor do input com base no estado inputText
    }

    const [repositories, setRepositories] = useState<IRepor[]>([]);

    useEffect(() => {
        try {
            fetch(`https://api.github.com/users/${input}/repos`)
                .then(result => {
                    if (!result.ok) {
                        alert('Não foi possível obter os repositórios do GitHub.')
                        throw new Error('Não foi possível obter os repositórios do GitHub.');
                    }
                    return result.json();
                })
                .then((dados) => setRepositories(dados))
                .catch(error => console.log(error));
        } catch (error) {
            console.error('Ocorreu um erro ao buscar os repositórios:', error);
            alert('Ocorreu um erro ao buscar os repositórios:')
        }
    }, [input]);

    function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            handleAdd(); // Chama a função handleAdd a ser chamada com o enter
        }
    }

    return (
        <>
            <div>
                <div className='cardTop'>
                    <legend>Pesquisar repositórios:</legend>
                    <div className='ImputCard'>
                        <input 
                            type="text" 
                            value={inputText} 
                            onChange={e => setInputText(e.target.value)} 
                            placeholder='Pesquisar pelo github'
                            onKeyDown={handleKeyPress} 
                        />
                        <button onClick={handleAdd}> Pesquisar </button> {/* Botão para inserir a informação */}
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
