<template>
    <el-row>
        <el-col :span="4"><span>{{ name }}</span></el-col>
        <el-col :span="10">
            <BasicFormItem :schema="operationSchema" v-bind:value.sync="operation"></BasicFormItem>
        </el-col>
        <el-col :span="10">
            <BasicFormItem :schema="valueSchema" v-bind:value.sync="val"></BasicFormItem>
        </el-col>
    </el-row>
</template>

<script>
import BasicFormItem from "../BasicForm/src/BasicFormItem";
export default {
    name: "Condition",
    components:{ BasicFormItem },
    props:{
        name: String,
        operations: Array,
        type: String,
        operate: String,
        value: [String, Number]
    },
    data() {
        return {
        }
    },
    computed: {
        operationSchema () {
            return {
                field: "operate",
                component: "Select",
                options: this.operations,
                componentProps: {
                    valueKey: "key",
                    labelKey: "name"
                }
            }
        },
        valueSchema() {
            return {
                field: "value",
                component: "Input",
                value:""
            }
        },
        operation: {
            get: function () {
                return this.operate
            },
            set: function (val) {
                this.$emit("update:operate", val)
            }
        },
        val: {
            get: function () {
                return this.value
            },
            set: function (val) {
                console.log(val)
                this.$emit("update:value", val)
            }
        }
    }
}
</script>

<style scoped>

</style>
