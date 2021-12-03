<template>
    <el-select v-bind="$attrs" v-model="val">
        <el-option v-for="option in options" :key="option[valueKey]" :value="option[valueKey]" :label="option[labelKey]"></el-option>
    </el-select>
</template>

<script>
export default {
    name: "Select",
    props: {
        options: Array,
        value: [String, Number, Array],
        valueKey: {
            type: String,
            default: "value"
        },
        labelKey: {
            type: String,
            default: "label"
        }
    },
    computed: {
        val: {
            get: function () {
                return this.value
            },
            set: function (val) {
                this.$emit("update:value", val)
            }
        }
    }
}
</script>

<style scoped>

</style>
