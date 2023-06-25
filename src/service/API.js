export function saveData(key, value) {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.log(error);
  }
}

export function loadData(key) {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}
