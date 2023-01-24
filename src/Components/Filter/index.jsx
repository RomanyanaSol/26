import React from 'react'
import s from './style.module.css'

export default function Filter({search}) {

    const onChange = event => {
        search(event.target.value);
    }

    return (
        <div className={s.search_container}>
            <input type="text" name='title' placeholder='Поиск...'
                onChange={onChange}
            />
        </div>
    )
}
