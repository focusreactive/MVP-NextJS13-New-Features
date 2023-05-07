import fs from 'fs';

const FILE = 'logs.json';

export async function read() {
  try {
    const file = await fs.promises.readFile(FILE, 'utf-8');
    return JSON.parse(file);
  } catch (error) {
    console.error(error);
  }

  return {};
}

export async function save(logs: any) {
  try {
    const previousLogs = await read();
    const newLogs = { ...previousLogs, ...logs };

    fs.promises.writeFile(FILE, JSON.stringify(newLogs)).catch(console.error);
  } catch (error) {
    console.error(error);
  }
}
