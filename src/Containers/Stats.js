import React from 'react';

const Stats  = (props) =>  {
    let fortnite = props.fortnite;
    let rows;
    if(fortnite) {
         rows = Object.keys(fortnite).map((key, index) => {
            let value = fortnite[key];

            return (
                <tr key={index}>
                    <td>{value.label}</td>
                    <td>{value.displayValue}</td>
                </tr>
            );
        });
    }
    return (
        <div className="Stats">
            <table>
                {rows}
            </table>
        </div>
    );
};


export default Stats;