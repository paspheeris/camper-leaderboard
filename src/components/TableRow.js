import React from 'react';


const TableRow = (props) => {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td className="TableRow-imagetd"><img className="user-photo" src={props.img} alt="user pic" /></td>
      <td className="TableRow-username">
        <a className="username-link" href={`https://www.freecodecamp.com/${props.username}`}
          target="_blank">{props.username}
        </a>
      </td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>
    </tr>
  )
}

export default TableRow;