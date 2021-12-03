<template>
    <div class="rule-item">
        <RuleType :options="options" :attrs="attrs" v-bind:type.sync="model.key" v-bind:selected.sync="model.selected"></RuleType>
        <Condition v-for="condition in model.conditions" :key="condition.key" v-bind="condition" v-bind:operate.sync="condition.operate" v-bind:value.sync="condition.value"></Condition>
    </div>
</template>

<script>
import RuleType from "./RuleType";
import Condition from "./Condition";
export default {
    name: "RuleItem",
    components:{Condition,RuleType},
    props: {
        options: Array,
        attrs: Object,
        value: Object,
    },
    data() {
        return {
            model: {
                key: "",
                selected: [],
                conditions: []
            },
        }
    },
    watch: {
        "model.key": {
            handler: function (newVal, oldVal) {
                if (oldVal.length !== 0) {
                    this.model.selected = []
                    this.conditions = []
                }
            },
            deep: true
        },
        "model.selected": {
            handler: function (val) {
                let { key ,selected, conditions } = this.model
                if (!this.attrs[key]) {
                    return
                }

                this.model.conditions = []
                let params = this.attrs[key].params || []
                selected.forEach(condition => {
                    params.forEach(param => {
                        if (condition === param.key) {
                            this.model.conditions.push(param)
                        }
                    })
                })
            },
            deep: true
        },
        value:{
            handler (val) {
                this.model = val
            },
            deep: true,
            immediate: true
        },
        attrs() {
            let data = []
            let { key, conditions } = this.model
            if (key.length > 0 && conditions.length > 0 && this.attrs[key]) {
                let params = this.attrs[key].params || []
                console.log(conditions, params)
                conditions.forEach(condition => {
                    params.forEach(param => {
                        if (param.key === condition.key) {
                            data.push({
                                ...param,
                                ...condition
                            })
                        }
                    })
                })
            }

            this.model.conditions = data
        }
    }
}
</script>

<style scoped>

</style>
