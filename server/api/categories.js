import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Data Extraction and Treatment',
        ptbr: 'Extração e Tratamento de Dados',
      },
    },
    {
      id: 2,
      title: {
        en: 'Data Exploration',
        ptbr: 'Exploração de Dados',
      },
    },
    {
      id: 3,
      title: {
        en: 'Automations',
        ptbr: 'Automações',
      },
    },
    {
      id: 4,
      title: {
        en: 'Dashboards',
        ptbr: 'Painéis de Dados',
      },
    },
  ]
})
