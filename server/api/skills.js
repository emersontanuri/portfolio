import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Python',
        ptbr: 'Python',
      },
      percentage: 80,
    },
    {
      id: 2,
      title: {
        en: 'SQL',
        ptbr: 'SQL',
      },
      percentage: 90,
    },
    {
      id: 2,
      title: {
        en: 'Power BI',
        ptbr: 'Power BI',
      },
      percentage: 50,
    },
  ]
})
