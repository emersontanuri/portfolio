import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'The World Bank\'s international debt data',
      link: '/portfolio_pages/the-world-banks-international-debt-data.html',
      publish_date: '02/01/2023',
      category: {
        id: 2,
        title: {
          en: 'Data Exploration',
          ptbr: 'Exploração de Dados',
        },
      },
      content: {
        en: 'This was a project proposed in the DataCamp basic data analyst course with SQL. In it, some data explorations are carried out with SQL in the database of international bank debts.',
        ptbr: 'Este foi um projeto proposto no curso básico de analista de dados com SQL do DataCamp. Nele, são realizadas algumas explorações de dados com SQL na base de dados de dívidas bancárias internacionais.',
      },
      image: '/images/the-world-banks-international-debt-data.jpg',
    },

  ]
})
