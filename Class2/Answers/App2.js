import React, { Component } from 'react';

import A2 from "./components/A2"

class App2 extends Component {
    render() {
        const chart = [
            {
                id: 1,
                peepsID: '1',
                bookLikedID: '1',
            },
            {
                id: 2,
                peepsID: '2',
                bookLikedID: '1',
            },
            {
                id: 3,
                peepsID: '4',
                bookLikedID: '5',
            },
            {
                id: 4,
                peepsID: '5',
                bookLikedID: '2',
            },
            {
                id: 5,
                peepsID: '3',
                bookLikedID: '5',
            },
            {
                id: 6,
                peepsID: '6',
                bookLikedID: '4',
            },
        ];

        const peeps = {
            1: {
                id: 1,
                name: 'Fazal Deen',
                readerCategory: 'champ',
            },
            2: {
                id: 2,
                name: 'Irfan',
                readerCategory: 'rising-star',
            },
            3: {
                id: 3,
                name: 'Muneeb',
                readerCategory: 'beginner',
            },
            4: {
                id: 4,
                name: 'Osama',
                readerCategory: 'champ',
            },
            5: {
                id: 5,
                name: 'Najam',
                readerCategory: 'champ',
            },
            6: {
                id: 6,
                name: 'Aamir',
                readerCategory: 'beginner',
            },
        };
        const books = {
            1: {
                id: 1,
                name: 'Imran Series',
            },
            2: {
                id: 2,
                name: 'Harry Potter',
            },
            3: {
                id: 3,
                name: 'I Am Malala',
            },
            4: {
                id: 4,
                name: 'Bang-e-Dara by Allama Iqbal',
            },
            5: {
                id: 5,
                name: 'Jokes 101',
            },
        };
        const temArr = []
        for (let key in books) {
            temArr.push({ id: key, name: books[key].name })
        }
        return (
            <div className="App">
                {temArr.map((v, i) => {
                    return (
                        <div key={i}><h5>{v.name}</h5><p>Liked By: </p>
                            <A2 book={v} peeps={peeps} charts={chart} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default App2;