<template>
    <div class="rule-form">
        <el-button size="small" @click="addRule">添加规则</el-button>

        <div class="rule-item" v-for="(v, index) in val" :key="index">
            <RuleItem :options="options" :attrs="attrs" v-bind:value.sync="val[index]"></RuleItem>
        </div>
    </div>
</template>

<script>
import RuleItem from "./RuleItem";
import BasicFormItem from "../BasicForm/src/BasicFormItem";
export default {
    name: "RuleForm",
    components:{BasicFormItem,RuleItem},
    props: {
        attrs: Object,
        options: Array,
        value: Array,
    },
    computed: {
        val: {
            get: function () {
                return this.value || []
            },
            set: function (val) {
                this.$emit("update:value", val)
            }
        }
    },
    methods: {
        addRule() {
            let data = this.value || []
            data.push({
                key:"", conditions:[]
            })
            this.$emit("update:value", data)
        }
    }
}
</script>

<style scoped>
.rule-form {
    border: 1px solid #f0f0f0;
    padding: 10px;
}
.rule-item:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
    padding: 20px 0;
}
</style>
