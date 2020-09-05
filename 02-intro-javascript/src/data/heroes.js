/*
  EXPORT DEFAULT SE UTILIZA CUANDO SOLO SE EXPORTARA
  UN SOLO FRAGMENTO DE CODIGO
*/

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

/*export const owners = ['Marvel','DC'];
export default heroes;*/

const owners = ['Marvel','DC'];

export {
    heroes as default,
    owners
}

