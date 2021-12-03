<template>
    <el-form-item v-bind="formItemAttr">
        <component :is="component" v-bind="compAttr" v-bind:value.sync="val" @input="onInput"></component>
    </el-form-item>
</template>

<script>
export default {
    name: "FormItem",
    props:{
        schema:{
            type: Object,
            required: true
        },
        value: [String, Number, Array]
    },
    computed: {
        component() {
            switch (this.schema.component) {
                case "RuleForm":
                    return "RuleForm"
                case "Select":
                    return "Select"
                default:
                    return `El${this.schema.component}`
            }
        },
        compAttr() {
            let { component, componentProps, value, options } = this.schema

            let attrs = {
                style: "min-width: 320px",
                size:"small",
                clearable: true,
                value: value,
                ...componentProps
            }
            switch (component) {
                case "Select":
                    return {
                        options: options,
                        ...attrs
                    }
                    case "Input":
                        return {
                            ...attrs,
                        }
                default:
                    return attrs
            }

        },
        formItemAttr() {
            return {
                label: this.schema.label
            }
        },
        val: {
            get: function () {
                return this.value
            },
            set: function (val) {
                this.$emit("update:value", val)
            }
        }
    },
    methods: {
        onInput (val) {
            this.$emit("update:value", val)
        }
    }
}
</script>

<style scoped>

</style>
