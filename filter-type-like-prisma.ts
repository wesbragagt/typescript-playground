/*
 * I want to be able to generate a type that can output a Filter type that resembles prisma's where property which you can pass { not, in, lt, gt, lte, gte } dynamically */

type NotFilter<T> = { [K in keyof T]: { not?: T[K] } };
type InFilter<T> = { [K in keyof T]: { in?: T[K] } };
type LessThanFilter<T> = { [K in keyof T]: { lt?: T[K] } };
type LessThanEqualFilter<T> = { [K in keyof T]: { lte?: T[K] } };
type GreaterThanFilter<T> = { [K in keyof T]: { gt?: T[K] } };
type GreaterThanEqualFilter<T> = { [K in keyof T]: { gte?: T[K] } };

type Filters<T> = Partial<NotFilter<T> & InFilter<T> & LessThanFilter<T> & LessThanEqualFilter<T> & GreaterThanEqualFilter<T> & GreaterThanFilter<T> >

// Hover on these types and see the result
type FilterField = NotFilter<{ createdAt: Date | null }>;
type FilterField2 = InFilter<{ id: number[] }>;
type FilterField3 = LessThanFilter<{ quantity: number }>;

// test out this function type
function getItems(filter: Filters<{ quantity: number }>){
  const items = [{quantity: 3}];
  return items
}

// autocompletion here for the filter types NICE!!!!
getItems({quantity: { lt: 2 }})

// TODO: figure out another version that is more composable
