<script setup>
import BaseNotification from './components/BaseNotification.vue';
import { ref } from 'vue';
//Liste de Notifications
const notificationsList = ref([]);

//Types de notifications
const types = ['danger', 'warning', 'success', 'info'];

/*
  addNotification(BaseNotification) :
  Ajoute une notification à la liste des notifications
  Si la liste est supérieure à 5, enlève le premier element de la liste
*/
const addNotification = (newNotification) => {
  if (notificationsList.value.length >= 5)
    notificationsList.value.shift();

  notificationsList.value.push(newNotification);
}

/*
  randomNotfif() :
  Crée une notification aléatoire et l'ajoute à la liste ds notifications.
  Le titre et le message sont génériques.
*/
const randomNotif = () => {
  addNotification({
    title : 'Modal Window',
    message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales dictum nibh id commodo',
    type : types[Math.floor(Math.random() * types.length)]
  })
}

</script>

<template>
  <!-- Affichage d'une notification au choix : j'ai choisis la notification d'information -->
  <main >
    <div class="random-notification-button-div">
      <button  @click="randomNotif()"> Générer une notification</button>
    </div>
      
    <div class="notifications-list">
      <BaseNotification v-for="(notif, index) in notificationsList"
      :key="index"
      :title="notif.title"
      :message="notif.message"
      :type="notif.type"
      ></BaseNotification>
    </div>
  </main>
</template>
