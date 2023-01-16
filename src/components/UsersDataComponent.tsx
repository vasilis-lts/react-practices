import { Columns, User } from '../types';
import UsersTable from './UsersTable';
import React, { useEffect, useState, useMemo } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { Button, Box } from '@mui/material';

const users: User[] = [
  {
    username: "Vasilis-Litsas",
    age: 37,
    address: {
      country: "GR",
      city: "Athens"
    }
  },
  {
    username: "Lotte Mulders",
    age: 30,
    address: {
      country: "NL",
      city: "Amsterdam"
    }
  }
];

const columnHelper = createColumnHelper<User & Columns>();

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function UsersDataComponent() {
  console.log('rendering');

  const [myList, setMyList] = useState(initialList);

  const [UsersData, setUsersData] = useState<User[]>([]);
  const [columns, setColumns] = useState<any>([]);


  useEffect(() => {
    getUsers();

    return () => {
      //
    }
  }, [])

  const getUsers = () => {
    setUsersData(users);
    createColumns();
  }

  const createColumns = () => {
    setColumns([
      columnHelper.accessor('username', {
        header: () => <span>Username</span>,
        cell: info => info.getValue(),
        // footer: info => info.column.id,
      }),
      columnHelper.accessor('age', {
        header: () => <span>Age</span>,
        cell: info => info.getValue(),
        // footer: info => info.column.id,
      }),
      columnHelper.accessor(row => row.actions, {
        id: "actions",
        header: () => <span></span>,
        cell: row => <Box className="flex">
          <Button color='error' variant='contained' onClick={() => deleteEntry(row.row.original)}>Delete</Button>
          <Button color='error' variant='contained' onClick={() => handleIncrementAge(row.row)}>Increment age</Button>
        </Box>
        // footer: info => info.column.id,
      }),
    ])
  }


  const addItem = () => {
    setUsersData( // Replace the state 
      prevUsers =>
        [ // with a new array
          ...prevUsers, // that contains all the old items
          {
            username: 'Yannis', age: 34, address: { country: "GR", city: "Piraeus" }
          } // and one new item at the end
        ]
    );
  }

  const deleteEntry = (row: any) => {
    setUsersData(prevUsers => prevUsers.filter(user => user.username !== row.username)
    );
  }

  function handleIncrementAge(row: any) {
    setUsersData(prevUsers => prevUsers.map(user => {
      if (user.username === row.original.username) {
        // Create a *new* object with changes
        return { ...user, age: row.original.age + 1 };
      } else {
        // No changes
        return user;
      }
    }));
  }

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  return (
    <>
      <h4>Users</h4>
      <div className="flex">
        <Button variant='contained' onClick={addItem}>Add item</Button>
      </div>
      {UsersData.length && columns.length ?
        <Box sx={{ mt: 1 }}>
          <UsersTable data={UsersData} columns={columns} />
        </Box>
        : null}

      <h4>Checkboxes toggle</h4>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
    </>
  )
}

export default UsersDataComponent


function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}