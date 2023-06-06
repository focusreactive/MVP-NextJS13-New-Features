import localFont from 'next/font/local';

import Doc from './doc.mdx';

const righteousRegular = localFont({
  src: '../../../public/fonts/Righteous-Regular.ttf',
  display: 'swap',
});

// const righteousRegular = localFont({
//   src: [
//     {
//       path: '../../../public/fonts/Righteous-Regular.ttf',
//       style: 'normal',
//       weight: '400',
//     },
//   ],
//   display: 'swap',
// });

const Page = () => {
  return (
    <div>
      <div className={righteousRegular.className}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dui
        eget augue lacinia, sed feugiat lorem sodales.
      </div>

      <br />

      <Doc />
    </div>
  );
};

export default Page;
