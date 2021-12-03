<template>
    <el-form v-bind="formProps" :model="model">
        <el-row>
            <el-col v-for="schema in schemas" :key="schema.field"  v-bind="schema.labelCol">
                <BasicFormItem v-bind:value.sync="model[schema.field]" :schema="schema" ></BasicFormItem>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
import BasicFormItem from "./BasicFormItem";
export default {
    name: "BasicForm",
    props: {
        schemas: {
            type: Array,
            required: true
        },
        formProps: Object,
        model: Object
    },
    components:{ BasicFormItem },
    data() {
        return {
        }
    },
    methods: {
        onChange(val) {
            // console.log(val)
        }
    },
    computed: {
        val: {
            get: function () {
                return this.model
            },
            set: function (val) {
                this.$emit("update:model", val)
            }
        }
    }
}
</script>

<style scoped>

</style>
