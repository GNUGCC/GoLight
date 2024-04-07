<template>
    <ion-img :src="url" />
</template>

<script>
    import {
        baseUrl
    } from "../api";

    import {
        IonImg
    } from "@ionic/vue";

    export default {
        components: {
            IonImg
        },
        computed: {
            url() {
                return `${baseUrl}/files/${this.path}`;
            }
        },
        data() {
            return {
            };
        },
        props: {
            path: String
        }
    };
</script>
