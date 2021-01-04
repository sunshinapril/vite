<template>
  {{ text }}
  <a-button type="primary"> 我是ant </a-button>
</template>

<script lang="ts">
export default {
  name: 'About',
  data() {
    return {
      text: 'about'
    };
  }
};
</script>
