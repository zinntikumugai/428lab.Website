<template>
  <div>
    <page-header />
    <nuxt />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "~/components/Page-Header.vue";
import PageFooter from "~/components/Page-Footer.vue";

export default {
  components: {
    PageHeader,
    PageFooter
  }

}
</script>
