const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = fs.readdirSync(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }),
  );
  return files.reduce(
    (acc, file) => (String(file).endsWith('page.tsx') ? acc.concat(file) : acc),
    [],
  );
}

async function addDummyDocs() {
  try {
    const files = await getFiles('app/@examples');

    files.forEach((element) => {
      const newPath = element.replace('@examples', '@docs');

      try {
        const dir = newPath.replace('/page.tsx', '');

        fs.mkdirSync(dir, { recursive: true });
      } catch (error) {
        console.error(error);
      }

      if (!fs.existsSync(newPath)) {
        fs.writeFileSync(
          newPath,
          `
  import Doc from './doc.mdx';
  
  export default function Page() {
    return <Doc />;
  }
          `,
        );

        fs.writeFileSync(
          newPath.replace('page.tsx', 'doc.mdx'),
          `
  # Hello, Next.js!
  created for example at ${newPath}
  
  You can import and use React components in MDX files.
        `,
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
}

addDummyDocs();
