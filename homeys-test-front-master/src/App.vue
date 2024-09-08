<script setup>
import BaseNotification from './components/BaseNotification.vue';

</script>

<template>
  <!-- Affichage d'une notification au choix : j'ai choisis la notification d'information -->
  <!-- Pour cette deuxième étape je n'utilise pas encore de boucle ni de liste -->
  <main>
    <BaseNotification
    :title="'Modal Window'"
    :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales dictum nibh id commodo'"
    :type="'danger'"
    ></BaseNotification>
    <br/>
    <BaseNotification
    :title="'Modal Window'"
    :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales dictum nibh id commodo'"
    :type="'warning'"
    ></BaseNotification>
    <br/>
    <BaseNotification
    :title="'Modal Window'"
    :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales dictum nibh id commodo'"
    :type="'success'"
    ></BaseNotification>
    <br/>
    <BaseNotification
    :title="'Modal Window'"
    :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales dictum nibh id commodo'"
    :type="'info'"
    ></BaseNotification>
  </main>
</template>
