<script setup>
import { useI18n } from 'vue-i18n'
useHead({
  title: 'Resume',
})
const { locale } = useI18n({ useScope: 'global' })
const { data: education } = await useFetch('/api/education')
const { data: jobs } = await useFetch('/api/jobs')
const { data: skills } = await useFetch('/api/skills')
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          {{ $t('resumeTitles.education') }}
        </h3>
      </div>

      <ol class="timeline-list">
        <li v-for="ed in education" :key="ed.id" class="timeline-item">
          <NuxtLink v-if="ed.link" :to="ed.link">
            <span>{{ locale === 'en' ? ed.name.en : ed.name.ptbr }}</span>
          </NuxtLink>
          <span v-else>{{ locale === 'en' ? ed.name.en : ed.name.ptbr }}</span>
          <h4 class="h4 timeline-item-title">
            {{ ed.institution }}
          </h4>

          <span>{{ ed.date }}</span>

          <p v-if="ed.content" class="timeline-text">
            {{ locale === 'en' ? ed.content.en : ed.content.ptbr }}
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="briefcase-outline" />
        </div>

        <h3 class="h3">
          {{ $t('resumeTitles.experience') }}
        </h3>
      </div>

      <ol class="timeline-list">
        <li v-for="job in jobs" :key="job.id" class="timeline-item">
          <span>{{ locale === 'en' ? job.type.en : job.type.ptbr }}</span>
          <h4 class="h4 timeline-item-title">
            {{ locale === 'en' ? job.title.en : job.title.ptbr }}
          </h4>

          <span>{{ job.startYear }} — {{ job.endYear ? job.endYear : locale === 'en' ? 'present' : 'presente' }}</span>

          <p class="timeline-text">
            {{ locale === 'en' ? job.content.en : job.content.ptbr }}
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        {{ $t('resumeTitles.skills') }}
      </h3>

      <ul class="skills-list content-card">
        <li v-for="skill in skills" :key="skill.id" class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              {{ skill.title }}
            </h5>
            <data :value="skill.percentage">{{ skill.percentage }}%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" :style="`width: ${skill.percentage}%;`" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
