import React from 'react';

const DecodeRow = ({decodeTableRow}) => {
    return (
        <>
        <tr>
            <td>{decodeTableRow.opcode}</td>
            <td>{decodeTableRow.operand}</td>
            <td>{decodeTableRow.instruction}</td>
        </tr>
        </>
    )
}
 
export default DecodeRow;