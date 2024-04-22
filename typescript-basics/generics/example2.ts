function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
  return array.findIndex((item) => item === arrayItem);
}

const arr = [120, 56, 49, 300];
getIndexOfArrayItem(arr, 300);
