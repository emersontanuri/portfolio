<script setup>
const router = useRouter()
useHead({
  title: 'Oops!',
})
</script>

<template>
  <article class="active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('notFound.title') }}
      </h2>
    </header>

    <div class="grid grid-cols-1 text-center mb-20 md:mb-0">
      <div class="text-[5rem] text-teal-500 font-bold">
        404
      </div>

      <div class="text-xl text-[#fafafa]">
        <span>{{ $t('notFound.text') }} 😞</span>
        <span class="mx-auto w-40 py-2 mt-5 cursor-pointer font-semibold bg-teal-500 text-[#1e1e1f] rounded text-sm" @click="router.back()">
          Voltar
        </span>
      </div>
    </div>
  </article>
</template>
