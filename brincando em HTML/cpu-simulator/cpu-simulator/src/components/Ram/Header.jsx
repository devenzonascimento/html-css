import React from "react";

const Header = ({ dataHeader }) => {
  return (
    <thead>
        <tr className="tableHeader">
        {dataHeader.map((dataRow) => (
            <>
                <th>
                    {dataRow}
                </th>
            </>
        ))}
        </tr>
    </thead>
  );
};

export default Header;