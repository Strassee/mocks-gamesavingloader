export default function read() {
  return new Promise((resolve, reject) => {
    reject(new Error('rejected'));
  });
}
