import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'SQL',
      description: {
        en: 'I work regularly with SQL at my job exploring data and creating reports to understand customers behaviors and format new marketing strategies.',
        ptbr: 'Trabalho regularmente com SQL explorando dados e criando relatórios para entender o comportamento dos clientes e formatar novas estratégias de marketing.',
      },
      icon: 'funnel',
      image: null,
      certifications: [
        {
          institution: 'DataCamp',
          title: 'SQL Fundamentals',
          publish_date: '02/01/2023',
          link: 'https://www.datacamp.com/statement-of-accomplishment/track/04740b43ba2b75c17089153bf53bdbbf7dc0ab6e',
        },
      ],
    },
    {
      id: 2,
      title: 'Metabase',
      description: {
        en: 'I work regularly with Metabase at my job as the tool to explore data and create reports with SQL.',
        ptbr: 'Eu trabalho regularmente com Metabase em meu trabalho como ferramenta para explorar dados e criar relatórios com SQL.',
      },
      icon: 'analytics',
      image: null,
    },
    {
      id: 3,
      title: 'Python',
      description: {
        en: 'I work with python foucusing in data analysis and visualization with Pandas, Numpy, Matplotlib and Seaborn. Also, I work creating data pipeline for ETL.',
        ptbr: 'Trabalho com Python focado na análise e visualização de dados com Pandas, Numpy, Matplotlib e Seaborn. Além disso, trabalho criando pipeline de dados para ETL.',
      },
      icon: 'logo-python',
      image: null,
    },
    {
      id: 4,
      title: 'Power BI',
      description: {
        en: 'I worked with PowerBI creating internal advertising reports and business partners reports.',
        ptbr: 'Trabalhei com PowerBI criando relatórios internos de publicidade e relatórios de parceiros de negócios.',
      },
      icon: 'podium',
      image: null,
    },
    {
      id: 5,
      title: 'Google Data Studio',
      description: {
        en: 'When I was a Expansion Coordinator, I implemented reports in Google Data Studio for a network of 100+ business partners.',
        ptbr: 'Quando eu era coordenador de expansão, implementei relatórios no Google Data Studio para uma rede de mais de 100 parceiros de negócios.',
      },
      icon: 'bar-chart',
      image: null,
    },
    {
      id: 6,
      title: 'Microsoft Excel',
      description: {
        en: 'I use spreadsheets for 8+ years with a more advanced use for 5 years creating integrations between sheets, as a database for small automations and as a MVP for bigger data projects.',
        ptbr: 'Uso planilhas há mais de 8 anos com uso mais avançado há 5 anos criando integrações entre planilhas, como banco de dados para pequenas automações e como MVP para projetos de dados maiores.',
      },
      icon: 'calculator',
      image: null,
    },
    {
      id: 7,
      title: 'Google Ads',
      description: {
        en: 'I have been working with Google Ads at my job focusing in customer acquisition mainly with app install campaings.',
        ptbr: 'Tenho gerenciado campanhas do Google Ads em meu trabalho com foco na aquisição de clientes, principalmente com campanhas diretas de instalação de aplicativos.',
      },
      icon: 'megaphone',
      image: null,
    },
    {
      id: 8,
      title: 'Facebook Ads',
      description: {
        en: 'I have been working with Facebook Ads for 6+ years creating and managing campaings for conversion and acquisition.',
        ptbr: 'Trabalho com Facebook Ads há mais de 6 anos criando e gerenciando campanhas de conversão e aquisição.',
      },
      icon: 'megaphone',
      image: null,
    },
    {
      id: 9,
      title: 'Google Analytics',
      description: {
        en: 'I use Google Analytics at my current job to analyze customer acquisition, traffic and conversions at the app by the marketing strategies we runned.',
        ptbr: 'Eu uso o Google Analytics no meu trabalho atual para analisar a aquisição, o tráfego e as conversões de clientes no aplicativo pelas estratégias de marketing que executamos.',
      },
      icon: 'person-add',
      image: null,
    },
    {
      id: 10,
      title: 'Airflow',
      description: {
        en: 'As a Marketing Manager, I created a data pipeline for marketing analysis of advertising costs and results using Airflow.',
        ptbr: 'Como gerente de marketing, criei um pipeline de dados para análise de marketing de custos e resultados de publicidade utilizando Airflow.',
      },
      icon: 'git-network',
      image: null,
    },
    {
      id: 11,
      title: 'Node.js',
      description: {
        en: 'I have used Node in robust applications created by myself and MVP projects at work creating fullstack applications and APIs.',
        ptbr: 'Eu usei o Node em aplicações robustas criados por mim e projetos MVP no trabalho criando aplicativos fullstack e APIs.',
      },
      icon: 'logo-nodejs',
      image: null,
    },
    {
      id: 12,
      title: 'VueJS',
      description: {
        en: 'This and many others projects I worked with were created in Vue and Nuxt.js. I have been working with Vue for 3+ years now.',
        ptbr: 'Este e muitos outros projetos com os quais trabalhei foram criados em Vue e Nuxt.js. Trabalho com Vue há mais de 3 anos.',
      },
      icon: 'logo-vue',
      image: null,
    },
  ]
})
