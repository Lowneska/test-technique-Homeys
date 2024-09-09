<script setup>
import BaseNotification from './components/BaseNotification.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import { useNotificationsStore } from './stores/notifications';

const notificationsStore = useNotificationsStore();


//Charge les informations au démarrage
onMounted(() => {
  notificationsStore.loadNotifications();
})

// Créer une nouvelle notification
const randomNotif = () => {
  notificationsStore.createNotification();
};

</script>

<template>
  <main >
    <div class="random-notification-button-div">
      <button  @click="randomNotif()"> Générer une notification</button>
    </div>
      
    <div class="notifications-list">
      <BaseNotification v-for="notif in notificationsStore.getAllNotifications"
      :key="notif.id"
      :title="notif.title"
      :message="notif.message"
      :type="notif.type"
      @supress="notificationsStore.removeNotification(notif)"
      ></BaseNotification>
    </div>
  </main>
</template>
