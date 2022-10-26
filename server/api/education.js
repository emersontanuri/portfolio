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
        en: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
        ptbr: 'Richard kurumsal bir kimlik yaratmak için işe alındı. Yapılan işten çok memnun kaldık. Çok fazla tecrübesi var ve müşterinin ihtiyaçları konusunda çok endişeli. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut workels dolore magnarels alia.',
      },
    },

  ]
})
