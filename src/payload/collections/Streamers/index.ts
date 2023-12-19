import { slugField } from '../../fields/slug';
import type { CollectionConfig } from 'payload/types'

export const Streamers: CollectionConfig = {
  slug: 'streamers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'subscribersAmount', 'categories'],
  },
  labels: {
    plural: 'Стримеры',
    singular: 'Стример',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Название',
    },
    {
      name: 'boostyLink',
      type: 'text',
      required: true,
      unique: true,
      label: 'Ссылка на Boosty',
    },
    {
      name: 'avatar',
      type: 'text',
      required: true,
      label: 'Ссылка на аватар на Boosty',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Тайтл',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Описание',
    },
    slugField('name', { unique: true }),
    {
      name: 'subscribersAmount',
      label: 'Число подписчиков',
      type: 'number',
      admin: {
        step: 1,
        position: 'sidebar',
      },
      min: 0,
    },
    {
      name: 'categories',
      label: 'Категории',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
