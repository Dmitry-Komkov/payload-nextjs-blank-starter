import type { FieldHook } from 'payload/types'
import slug from 'slug'

// const format = (val: string): string =>
//   val
//     .replace(/ /g, '-')
//     .replace(/[^\w-]+/g, '')
//     .toLowerCase()

const formatSlug =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return slug(value)
    }

    if (operation === 'create') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return slug(fallbackData)
      }
    }

    return value
  }

export default formatSlug
