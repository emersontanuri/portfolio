<script setup>
useHead({
  title: 'Contact',
})
</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.contact') }}
      </h2>
    </header>
    <section class="contact-form">
      <h3 class="h3 form-title">
        {{ $t('formInfos.title') }}
      </h3>

      <form action="#" class="form" data-form>
        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input" :placeholder="$t('formInfos.name')" required data-form-input>

          <input
            type="email" name="email" class="form-input" :placeholder="$t('formInfos.email')" required
            data-form-input
          >
        </div>

        <textarea name="message" class="form-input" :placeholder="$t('formInfos.message')" required data-form-input />

        <button class="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane" />
          <span>{{ $t('formInfos.sendForm') }}</span>
        </button>
      </form>
    </section>
  </article>
</template>
