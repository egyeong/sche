import React from 'react';

function Searching() {
    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return(
        <table className={"table"}>
            <thead>
                <tr className={"danger"}>
                    <h1>검 색  </h1>
                    <input type = {"text"} className = {"input-sm"} size = {"25"} onChange = {handleChange}/>
                    <th>일정</th>
                    <th></th>
                    <th>Start</th>
                    <th>End</th>
                    <th>설명</th>
                </tr>
            </thead>
        </table>
    )
 }

export default Searching;