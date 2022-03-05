import React, { useEffect, useState } from 'react';

export default function Loader({ loader }: any) {
  const [ld, setLd] = useState(false);
  useEffect(() => {
    setLd(loader);
  }, [loader]);
  return (
    <div className={ld ? 'loader' : 'loader disable'}>
      <img
        src="https://client-saas.sworks.co.in/assets/images/loader-sw.gif"
        alt="Loder"
      />
    </div>
  );
}
