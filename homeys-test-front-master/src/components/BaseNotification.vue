<template>
    <!-- Template d'une notification : -->
    <!-- Cette div a maintenant deux classe :notification-content et type, une classe dynamique.
    Plus de précision sur style.css ! -->
    <div :class="['notification-content', type]">
        <!-- src va recevoir la source de l'icone selon le type transmis !-->
        <img class="notification-icon" :src="getIcon" >
        <div class="notification-header-body">
            <div class="notification-header">
                <h3 class="notification-title">{{ title }}</h3>
                <button class="notification-close" > &#x2715;
                </button>
            </div>
            <div class="notification-body">
                {{message}}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, computed } from 'vue';

    /* Props :
        Et on ajoute un troisième prop !
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
</script>