import React from 'react'
import s from './style.module.css';

export default function User({ id, first_name, last_name, image, delete_user }) {


  return (
    <div className={s.card}>
      <div>
        <p>{first_name}</p>
        <p>{last_name}</p>
      </div>
      <img src={image} alt="foto" />
      <button onClick={() => delete_user(id)}>Удалить</button>
    </div>
  )
}
