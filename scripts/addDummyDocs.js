const { resolve } = require('path');
const fs = require('fs');

async function getFiles(dir) {
  const subdirs = fs.readdirSync(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir);
      return fs.statSync(res).isDirectory() ? getFiles(res) : res;
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

    files.forEach((pagePath) => {
      const docsPath = pagePath.replace('@examples', '@docs');

      try {
        const dir = docsPath.replace('/page.tsx', '');

        fs.mkdirSync(dir, { recursive: true });
      } catch (error) {
        console.error(error);
      }

      if (!fs.existsSync(docsPath)) {
        fs.writeFileSync(
          docsPath,
          `
  import Doc from './doc.mdx';
  
  export default function Page() {
    return <Doc />;
  }
          `,
        );

        const file = fs.readFileSync(pagePath, 'utf-8');

        fs.writeFileSync(
          docsPath.replace('page.tsx', 'doc.mdx'),
          '```js' +
            `
${file}` +
            '```',
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
}

addDummyDocs();
