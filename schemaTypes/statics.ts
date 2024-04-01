import {defineField, defineType} from 'sanity'

export const Statics = defineType({
  name: 'statics',
  title: 'Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'lessons',
      type: 'number',
      description: 'Number of video lessons',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'courses',
      type: 'number',
      description: 'Number of courses',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'hours',
      type: 'number',
      description: 'Number of hours',
      validation: rule => rule.required(),
    }),
  ],
})