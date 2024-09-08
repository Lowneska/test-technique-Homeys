<template>
    <!-- Template d'une notification :
        Si show ==  true, la notification est affichée, sinon elle est cachée 
    -->
    <div :class="['notification-content', type]" v-show="show">
        <img class="notification-icon" :src="getIcon" >
        <div class="notification-header-body">
            <div class="notification-header">
                <h3 class="notification-title">{{ title }}</h3>
                <!-- le bouton va appeler la fonction hideNotification une fois cliqué -->
                <button class="notification-close" @click="hideNotification" > &#x2715;
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

    const show = ref(true);

    /* hideNotification :
        Met la variable show a false.
        Le composant disparait mais n'est pas effacé d'une quelconque liste.
        Comme je n'ai pas de store le composant se réaffiche lorsque je recharge la page.
    */
    const hideNotification = () => {
        show.value = false;
    }
</script>