<template>
    <div>
        <el-row>
            <el-col :span="12">
                <BasicFormItem :schema="typeSchema" v-bind:value.sync="typeKey"></BasicFormItem>
            </el-col>
            <el-col :span="12">
                <BasicFormItem :schema="conditionSchema" v-bind:value.sync="conditionVal"></BasicFormItem>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import BasicFormItem from "../BasicForm/src/BasicFormItem";
export default {
    name: "RuleType",
    components: {BasicFormItem},
    props: {
        attrs: Object,
        type: String,
        options: Array,
        selected: Array
    },
    data() {
        return {

        }
    },
    computed: {
        typeSchema () {
            return {
                field: "key",
                component: "Select",
                options: this.options || []
            }
        },
        conditionOptions() {
            let data = []
            let rule =  this.attrs[this.type] || []
            let params = rule.params || []

            params.forEach(item => {
                data.push({
                    value: item.key,
                    label: item.name,
                })
            })
            return data
        },
        conditionSchema () {
            return {
                field: "conditions",
                component: "Select",
                options: this.conditionOptions,
                componentProps: {
                    multiple: true
                }
            }
        },
        typeKey: {
            get: function () {
                return this.type
            },
            set: function (val) {
                this.$emit("update:type", val)
            }
        },
        conditionVal: {
            get: function () {
                return this.selected
            },
            set: function (val) {
                this.$emit("update:selected", val)
            }
        }
    },

}
</script>

<style scoped>

</style>
