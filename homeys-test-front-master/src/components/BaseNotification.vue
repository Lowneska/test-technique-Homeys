<template>
    <!-- Template d'une notification :
    La divison a été faite ainsi pour faciliter la disposition des différents
    éléments en css.
    -->
    <div class="notification-content">
        <!-- pas très flexible pour cette première étape mais ce le sera à l'étape 2 !-->
        <img class="notification-icon" src="@/assets/icons/Info.svg" >
        <div class="notification-header-body">
            <div class="notification-header">
                <h3 class="notification-title">{{ title }}</h3>
                    <!-- j'avais pensé à utiliser la technique avec before et after pour créer une croix
                     en css puis j'ai vu que ce caractère existait.-->
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
    import { defineProps } from 'vue';

    /* Props :
        Pour l'instant nous n'en auront que deux :
        - title : le titre de ma notification, un string requis
        - message : le contenue de ma notification, un string requis
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
    });
</script>