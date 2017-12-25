<template>
    <div class="comp-loading" :class="'comp-loading--' + type">
        <div class="m-loading" v-if="type === 'block'">
            <div class="rect rect1"></div>
            <div class="rect rect2"></div>
            <div class="rect rect3"></div>
            <div class="rect rect4"></div>
            <div class="rect rect5"></div>
        </div>
        <div class="m-loading-point" v-if="type === 'inline'">
            <div class="bounce bounce1"></div>
            <div class="bounce bounce2"></div>
            <div class="bounce bounce3"></div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {

            };
        },
        props: {
            /**
             * block & inline
             */
            type: {
                type: String,
                default: 'block'
            }
        },
        methods: {

        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    .comp-loading {
        &--block {
            padding: 30px 0;
            text-align: center;
        }
        &--inline {
            display: inline-block;
            height: 40px;
            line-height: 40px;
        }
    }
</style>