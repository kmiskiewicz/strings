import {
  fromCamelToSnake,
  fromCamelToKebab,
  fromSnakeToCamel,
  fromSnakeToKebab,
  fromKebabToCamel,
  fromKebabToSnake,
  fromAnyToCamel,
  fromAnyToSnake,
  fromAnyToKebab,
} from './strings'

describe('#strings', () => {
  test('fromCamelToSnake', () => {
    const result = fromCamelToSnake('fromCamelToSnake')
    const expected = 'from_camel_to_snake'

    expect(result).toEqual(expected)
  })

  test('fromCamelToKebab', () => {
    const result = fromCamelToKebab('fromCamelToKebab')
    const expected = 'from-camel-to-kebab'

    expect(result).toEqual(expected)
  })

  test('fromSnakeToCamel', () => {
    const result = fromSnakeToCamel('from_snake_to_camel')
    const expected = 'fromSnakeToCamel'

    expect(result).toEqual(expected)
  })

  test('fromSnakeToKebab', () => {
    const result = fromSnakeToKebab('from_snake_to_kebab')
    const expected = 'from-snake-to-kebab'

    expect(result).toEqual(expected)
  })

  test('fromKebabToCamel', () => {
    const result = fromKebabToCamel('fromKebabToCamel')
    const expected = 'fromKebabToCamel'

    expect(result).toEqual(expected)
  })

  test('fromKebabToSnake', () => {
    const result = fromKebabToSnake('from-kebab-to-snake')
    const expected = 'from_kebab_to_snake'

    expect(result).toEqual(expected)
  })

  test('fromAnyToCamel', () => {
    const result = fromAnyToCamel('from_any_to_camel')
    const expected = 'fromAnyToCamel'

    expect(result).toEqual(expected)
  })

  test('fromAnyToSnake', () => {
    const result = fromAnyToSnake('from-any-to-snake')
    const expected = 'from_any_to_snake'

    expect(result).toEqual(expected)
  })

  test('fromAnyToKebab', () => {
    const result = fromAnyToKebab('fromAnyToKebab')
    const expected = 'from-any-to-kebab'

    expect(result).toEqual(expected)
  })
})
