import styles from './Form.module.css';
import { categories } from '../Category';
import { useState } from 'react';

function Form() {

    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState('');

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

        if (!regex.test(url) || url.length < 43) {
            setErrors('Erro: URL inválida!');
            return false;
        } else {
            return url.substring(32, 43); //Pegar o id do video
        };
    };

    function onSave(e) {
        e.preventDefault();
        console.log(url, category);

        //Validar category
        if (!category || category === '-') {
            setErrors('Erro: Escolha uma categoria!');
            return
        } else {
            setErrors('');
        };

        //Validar url
        const urlVideo = valideUrl(url);
        if (urlVideo && category) {

            //Guardar a url e a category
            const newVideo = { url, category };
            setVideos([...videos, newVideo]);
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));
            //Limpar o form
            setUrl('');
            setCategory('');
        } else {
            setErrors('Erro: URL inválida!');
        }
    };

    return (
        <section className={styles.container}>
            <h2>Adicionar Videos</h2>
            <form onSubmit={onSave} >
                <div>
                    <label>URL do video</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}>
                        <option value="-">Selecione uma categoria</option>
                        {categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Adicionar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    );
}

export default Form;