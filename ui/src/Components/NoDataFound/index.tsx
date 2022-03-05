import React, { useEffect, useState } from 'react';

export default function Loader({ data }: any) {
  const [d, setData]: any = useState(undefined);
  useEffect(() => {
    setData(data);
  }, [data]);

  return d && d.length === 0 ? (
    <div className="data-table-container">
      <div className="table-responsive">
        <div
          className="Nodata"
          style={{ marginTop: '75px', marginBottom: '75px', marginLeft: '40%' }}
        >
          <img
            src="	https://client-saas.sworks.co.in/assets/images/no-data.png"
            alt="no data available"
          />
        </div>
      </div>
    </div>
  ) : null;
}
