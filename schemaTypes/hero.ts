import {defineField, defineType} from 'sanity'

export const Hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      description: 'Heading of the hero section',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
      description: 'Content of the hero section',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'cta_text',
      type: 'string',
      description: 'Text of the call to action button',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'highlighted_heading_texts',
      type: 'string',
      description: 'Texts from heading that should be highlighted',
    }),
    defineField({
      name: 'about',
      type: 'string',
      description: 'Heading of the about section',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      description: 'Content of the about section',
      validation: rule => rule.required(),
    }),
  ],
})