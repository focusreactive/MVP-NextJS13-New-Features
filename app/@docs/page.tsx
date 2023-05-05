import Image from 'next/image';
import structure from 'public/assets/folder_structure.png';

import Doc from './doc.mdx';

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Folder structure</h1>
      <Image src={structure} alt="structure" />
      <Doc />
    </div>
  );
};

export default HomePage;
