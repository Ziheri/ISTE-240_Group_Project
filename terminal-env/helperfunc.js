export function getAllDirectories(filePath) {
  let keys = Object.keys(filePath);
  keys.forEach((key) => {
    if (typeof filePath[key] === "object" && filePath[key] !== null) {
      keys = keys.concat(getAllKeys(filePath[key]));
    }
  });
  return keys;
}
