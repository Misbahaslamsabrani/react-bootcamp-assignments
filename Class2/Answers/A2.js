import React from 'react';
const A2 = (props) => {
    const temArr = props.charts.filter((v, i) => {
        return props.book.id === v.bookLikedID
    })
    return (
        <div>
            {temArr.length > 0 ? (
                <ul>
                    {temArr.map((v, i) => {
                        return <li key={i}>{props.peeps[v.peepsID].name}</li>
                    })}
                </ul>) : ("None of the peeps in the chart liked this book")}
        </div>
    )
}
export default A2;