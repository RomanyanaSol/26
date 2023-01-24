import React from 'react'
import s from './style.module.css';

export default function AddUser({add_user}) {

    const onSubmit = event => {
        event.preventDefault();
        const {first_name} = event.target;
        const {last_name} = event.target;
        const {image} = event.target;

        const new_user ={
            id: Date.now(),
            first_name: first_name.value,
            last_name: last_name.value,
            image: image.value,
        };

        first_name.value = '';
        last_name.value = '';
        image.value = '';

        add_user(new_user);

    }

    return (
        <div >
            <form className={s.form} onSubmit={onSubmit} >
                <input type="text" name='first_name' placeholder='Имя' />
                <input type="text" name='last_name' placeholder='Фамилия'/>
                <input type="text" name='image' placeholder='Ссылка на фото'/>
                <button>Добавить</button>
            </form>
        </div>
    )
}
