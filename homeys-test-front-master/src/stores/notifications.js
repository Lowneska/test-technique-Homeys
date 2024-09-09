import { defineStore } from "pinia";
import { ref, computed, watch } from 'vue';

// Syntax Setup Stores

export const useNotificationsStore = defineStore('notifications', () => {
    /**************************************************************************************************/
    /*                                        STATE                                                  */
    /************************************************************************************************/
    // Liste de Notifications
    const notificationsList = ref([]);

    //Types de notifications
    const types = ['danger', 'warning', 'success', 'info'];

    /**************************************************************************************************/
    /*                                    ACTIONS                                                    */
    /************************************************************************************************/

    /* createNotification :
    Créer une notification random et l'ajoute à la liste des notifications
    */
    const createNotification = () => {
        const newNotification = {
            id: crypto.randomUUID(),
            title: 'Modal Window',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales dictum nibh id commodo',
            type: types[Math.floor(Math.random() * types.length)]
        };
        if (notificationsList.value.length >= 5)
            notificationsList.value.shift();
        
          notificationsList.value.push(newNotification);
    };

    /* deleteNotification: 
    Supprime une notification en fonction de son ID
    */
    const removeNotification = (notif) => {
        notificationsList.value = notificationsList.value.filter(obj => obj.id !== notif.id);
    };


    /**************************************************************************************************/
    /*                                     GETTER                                                    */
    /************************************************************************************************/

    /* GetAllNotifications :
    Renvois la liste de touutes les notifications
    */
    const getAllNotifications = computed(() => notificationsList.value);

    /*getNotificationById :
    Récupérer une notification à l'aide de son id
    */
    const getNotificationById = (id) => {
        return notificationsList.value.find(notif => notif.id === id);
    };


    /**************************************************************************************************/
    /*                             Chargement et sauvegarde des données                              */
    /************************************************************************************************/
    // Charge les informations depuis localStorage
    const loadNotifications = () => {
        const savedNotifications = localStorage.getItem('notificationsList');
        if (savedNotifications) {
            notificationsList.value = JSON.parse(savedNotifications);
        }
    };

    // Sauvegarde les changements dans localStorage
    watch(
        notificationsList,
        (newList) => {
            localStorage.setItem('notificationsList', JSON.stringify(newList));
        },
        { deep: true }
    );

    return {
        notificationsList,
        loadNotifications,
        createNotification,
        removeNotification,
        getAllNotifications,
        getNotificationById,
    };
});
