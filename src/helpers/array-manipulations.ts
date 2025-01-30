export function moveElementToFront<T>(array: T[], indexN: number): T[] {
  if (indexN < 0 || indexN >= array.length) {
    return array;
  }
  const newArray = [...array];
  const [element] = newArray.splice(indexN, 1);
  newArray.unshift(element);
  return newArray;
}
