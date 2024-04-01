import { defineField, defineType } from 'sanity'

export const Price = defineType({
  name: 'price',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({
      name: 'pricing_plans',
      type: 'array',
      description: 'Pricing plans info',
      validation: rule => rule.required(),
      of: [
        {
          type: 'object',
          name: 'plan',
          fields: [
            defineField({
              name: 'plan_name',
              type: 'string',
              description: 'Name the plan',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'plan_details',
              type: 'array',
              description: 'Accessible details of the plan',
              validation: rule => rule.required(),
              of: [
                {
                  type: 'object',
                  name: 'plan_detail',
                  fields: [
                    defineField({
                      name: 'detail',
                      type: 'string',
                      validation: rule => rule.required(),
                    }),
                    defineField({
                      name: 'accessible',
                      description: 'Define if the detail is accessible by this pricing plan',
                      type: 'boolean',
                      initialValue: true,
                    }),
                    defineField({
                      name: 'highlighted',
                      description: 'Detail that should be highlighted',
                      type: 'boolean',
                      initialValue: false,
                    })
                  ]
                }
              ]
            })
          ]
        }
      ]
    }),
  ],
})