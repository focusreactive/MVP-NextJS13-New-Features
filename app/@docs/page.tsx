import Image from 'next/image';

import structure from '../../public/assets/folder_structure.png';

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Folder structure</h1>
      <Image src={structure} alt="structure" />
    </div>
  );
};

export default HomePage;
