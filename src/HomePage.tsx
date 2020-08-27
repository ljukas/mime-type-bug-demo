import React from 'react';
import HomepageImage from 'src/img/frontpage.jpeg';

const HomePage = (): JSX.Element => {
  return (
    <div>
      <img
        src={HomepageImage}
        alt="school image"
        className="h-96 w-full object-cover lg:w-full lg:h-full"
      />
    </div>
  );
};

export default HomePage;
