import React from "react";

function Customers() {
  return (
    <>
      <div className="customers">
        <div className="customers__list">
          <img src="/nokia.svg" alt="Nokia" width={156} height={26} />
          <img src="/Group.svg" alt="Group On" width={160} height={29} />
          <img
            src="/honeywell.svg"
            alt="Honey Well"
            width={181.67}
            height={35}
          />
          <img src="/abb.svg" alt="ABB" width={86.67} height={35} />
          <img src="/barclays.svg" alt="Bar Clays" width={195} height={35} />
        </div>
      </div>
    </>
  );
}

export default Customers;
