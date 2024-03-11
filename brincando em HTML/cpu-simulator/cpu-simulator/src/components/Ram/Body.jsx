import React from "react";

const Body = ({ dataBody }) => {
  return (
    <tbody>
      {dataBody.map((dataRow) => (
        <>
          <tr>
            <td>{dataRow.adress}</td>
            <td>{dataRow.value}</td>
          </tr>
        </>
      ))}
    </tbody>
  );
};

export default Body;
