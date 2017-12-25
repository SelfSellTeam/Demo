<template>
    <div>
        <ella v-if="$route.params.person==='ella'"></ella>
        <andres v-if="$route.params.person==='andres'"></andres>
        <christina v-if="$route.params.person==='christina'"></christina>
    </div>
</template>

<script type="text/babel">
    import Ella from './Ella.vue'
    import Andres from './andres.vue'
    import christina from './christina.vue'
    export default {
        name: 'Detail',
        components: {
            Ella,
            Andres,
            christina
        },
        data() {
            return {};
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                let person = vm.$route.params.person;
                if(person){
                    document.title = person.toUpperCase().slice(0, 1) + person.slice(1) + " Details";
                }
            });
        },
        methods: {}
    }
</script>

