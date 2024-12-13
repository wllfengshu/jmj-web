<template>
  <footer class="footer">
    <p class="welcome">欢迎访问我们的网站</p>
    <p class="copyright">&copy; {{ currentYear }} JMJ Web. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped lang="scss">
.footer {
  padding: 20px;
  text-align: center;
  background-color: var(--bg-color);
  position: fixed;
  bottom: 0;
  width: 100%;

  .welcome {
    font-size: 16px;
    color: var(--text-color);
  }

  .copyright {
    font-size: 14px;
    color: #666;
    margin-top: 5px;
  }
}
</style>
