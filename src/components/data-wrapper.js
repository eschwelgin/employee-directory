import React, { useState } from 'react'
import DataLine from './data-line.js'

const DataWrapper = (props) => {

    const [employees, setEmployees] = useState(props.employees)

    function handleClick(sortBy) {
        if (sortBy === "name") {
            let sortedEmployees = props.employees.slice(0).sort((a, b) => (a.name > b.name) ? 1 : -1)
            setEmployees(sortedEmployees) 
        } else if (sortBy === "email") {
            let sortedEmployees = props.employees.slice(0).sort((a, b) => (a.email > b.email) ? 1 : -1)
            setEmployees(sortedEmployees) 

        } else if (sortBy === "position") {
            let sortedEmployees = props.employees.slice(0).sort((a, b) => (a.position > b.position) ? 1 : -1)
            setEmployees(sortedEmployees) 
        }
    }

    React.useEffect(() => {
        setEmployees(props.employees.slice(0).sort())
    }, [props])

    return (
        <table> 
            <tr>
                <th>Name <button onClick={() =>handleClick("name")}>Sort</button></th>
                <th>email <button onClick={() =>handleClick("email")}>Sort</button></th>
                <th>Position <button onClick={() =>handleClick("position")}>Sort</button></th>
            </tr>
                <DataLine key={employees.id} employees={employees}/>
        </table>
    )
}

// const DataWrapper = (props) => {
//     return (
//         <table> 
//             <tr>
//                 <th>Name</th>
//                 <th>email</th>
//                 <th>Position</th>
//             </tr>
//                 <DataLine employees={props.employees}/>
//         </table>
//     )
// }

export default DataWrapper