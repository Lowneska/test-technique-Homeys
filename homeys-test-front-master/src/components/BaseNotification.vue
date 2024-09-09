<template>
    <!-- Template d'une notification :-->
    <div :class="['notification-content', type]">
        <img class="notification-icon" :src="getIcon" >
        <div class="notification-header-body">
            <div class="notification-header">
                <h3 class="notification-title">{{ title }}</h3>
                <!-- le bouton va appeler la fonction supressNotification une fois cliqué -->
                <button class="notification-close" @click="supressNotification" > &#x2715;
                </button>
            </div>
            <div class="notification-body">
                {{message}}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, computed, defineEmits, ref } from 'vue';

    /* Props :
        - title : le titre de ma notification, un string requis
        - message : le contenue de ma notification, un string requis
        - type : spécifie le type de la notification ('danger', 'warning', 'success', 'info'),
            un string requis
    */
    const props = defineProps({
        title: {
        type: String,
        required: true
        },
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            //petite sécurité pour vérifier si le type a l'une de ces valeurs
            validator: (value) => {
                return ['danger', 'warning', 'success', 'info'].includes(value);
            }
        }
    });

    //Evenements pouvants etre emis par le composant
    const emit = defineEmits(['supress']);
    /* getIcon :
        Propriété computed qui aura pour valeur la route vers 
        l'icon qui correspond au type de la notification.
     */
    const getIcon = computed(() => {
        switch(props.type)
        {
            case "danger":
                return "/src/assets/icons/Danger.svg";
            case "warning":
                return "/src/assets/icons/Warning.svg";
            case "success":
                return "/src/assets/icons/CheckCircle.svg";
            case "info":
                return "/src/assets/icons/Info.svg";
            default :
                return "";
        }
    })

    /* hideNotification devient suppressNotifiation :
        Emet un evenement supress.
        Le composant est effacé.
    */
    const supressNotification = () => {
        emit('supress');
    }
</script>