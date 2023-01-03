import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Federal University of São Francisco Valley',
        ptbr: 'Universidade Federal do Vale do São Francisco',
      },
      startYear: 2016,
      endYear: 2022,
      type: {
        en: 'Graduation',
        ptbr: 'Graduação',
      },
      content: {
        en: 'Graduated in Business Administration with a focus on decision-making and marketing studies.',
        ptbr: 'Graduado em Administração com foco nos estudos de tomada de decisão e marketing.',
      },
    },
  ]
})
