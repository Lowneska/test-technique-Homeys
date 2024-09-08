<script setup>
import BaseNotification from './components/BaseNotification.vue';
</script>

<template>
  <!-- Affichage d'une notification au choix : j'ai choisis la notification d'information -->
  <main>
    <BaseNotification
    :title="'Modal Window'"
    :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales dictum nibh id commodo'"
    ></BaseNotification>
  </main>
</template>
