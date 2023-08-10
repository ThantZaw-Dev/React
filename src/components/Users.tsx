import { useEffect, useState } from 'react'

export default function Users() {
const [users, setUsers ] = useState([]);

useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(json => {
        setUsers(json.data);
    });

  
},[])

  return (
    <div>
        <ul>
            {users.map(u => <li key={u.id}>{u.first_name}</li>)}
        </ul>
    </div>
  )
}
