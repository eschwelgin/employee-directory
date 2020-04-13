import React from 'react' 

export default function DataLine(props) {
    return (
            props.employees.map(({ name, email, position })  => (
                (
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{position}</td>
                    </tr>
                )
            ))
    )
}
