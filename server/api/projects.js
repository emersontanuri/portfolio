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
    {
      id: 2,
      title: 'When Was the Golden Age of Video Games?',
      link: '/portfolio_pages/when-was-the-golden-age-of-video-games.html',
      publish_date: '02/01/2023',
      category: {
        id: 2,
        title: {
          en: 'Data Exploration',
          ptbr: 'Exploração de Dados',
        },
      },
      content: {
        en: 'This was a project proposed in the DataCamp basic data analyst course with SQL. In it, some data explorations are carried out with SQL in the database of game sales from 1977 to 2020.',
        ptbr: 'Este foi um projeto proposto no curso básico de analista de dados com SQL do DataCamp. Nele, são realizadas algumas explorações de dados com SQL na base de dados vendas de jogos de 1977 a 2020.',
      },
      image: '/images/when-was-the-golden-age-of-video-games.jpg',
    },
  ].reverse()
})
