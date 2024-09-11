// Implement a function that creates an object composed of keys generated
// from the results of applying groupFn to the array elements.


// just add type annotations to this function
function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  groupFn: (item: T) => K
): Partial<Record<K, T[]>> {
  const result: Partial<Record<K, T[]>> = {};

  arr.forEach(item => {
    const key = groupFn(item)

    if (!result[key]) {
      result[key] = []
    }
    
    result[key]!.push(item)
  });

  return result;
}

enum Country {
  ////
  UA = 'UA',
  IL = 'IL',
  ////
}

// example:

const people1: { name: string, country: Country, gender: string }[] = [
  { name: 'John', country: Country.IL, gender: 'MALE' },
  { name: 'Mika', country: Country.UA, gender: 'MALE' },
  { name: 'Dror', country: Country.IL, gender: 'FEMALE' },
];


const result1: any = groupBy(people1, (person) => person.gender);



console.log(result1);

/* would print:
{
  IL: [
    { name: 'John', country: 'IL' },
    { name: 'Dror', country: 'IL' },
  ],
  UA: [
    { name: 'Mika', country: 'UA' },
  ],
}
*/