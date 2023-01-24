import { useState } from "react";
import AddUser from "../AddUser";
import Filter from "../Filter";
import User from "../User";
import s from './style.module.css';


function App() {

  const default_users = [
    {
      id: 1,
      first_name: 'Генадий',
      last_name: 'Соловьёв',
      image: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
      show: true
    },
    {
      id: 2,
      first_name: "Евгений",
      last_name: 'Киселёв',
      image: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
      show: true
    },
    {
      id: 3,
      first_name: 'Леонид',
      last_name: 'Ярмольник',
      image: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
      show: true
    }
  ];


  const [users, setUsers] = useState(default_users);

  const delete_user = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }


  const add_user = (user) => {
    setUsers([...users, user]);
  }

  const search = (string) => {
    string = string.toLowerCase();
    const new_user = users.map(user => {
      if (user.show = user.first_name.toLowerCase().startsWith(string)) {
        return user
      } else {
        user.show = user.last_name.toLowerCase().startsWith(string)
      }
      return user
    })
    setUsers(new_user);
  }





  return (
    <div>
      <AddUser add_user={add_user} />
      <Filter search={search} />
      <div className={s.card}>
        {
          users
            .filter(({ show }) => show)
            .map(user => <User key={user.id}{...user} delete_user={delete_user} />)
        }
      </div>
    </div>
  );
}

export default App;
