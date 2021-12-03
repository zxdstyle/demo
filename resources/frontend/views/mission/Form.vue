<template>
    <div>
        <el-card>
            <BasicForm :schemas="schemas" :formProps="formProps" v-bind:model.sync="model"></BasicForm>
        </el-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BasicForm } from "../../components/BasicForm"
import CompleteAttr from "../../api/complete_attr";


export default {
    name: "Form",
    components:{ BasicForm },
    data() {
        return {
            attrs: [],
            formProps: {
                // inline: true
            },
            model:{
                // name: "测试阶段任务",
                // permission_rules: [
                //     {
                //         key: "chat_inter_sen_gifts",
                //         selected: ["216"],
                //         conditions: [
                //             {"key":"216","type":"int","operate":">=","value":"100"}
                //         ]
                //     }
                // ]
            }
        }
    },
    computed: {
        schemas() {
            return [
                {
                    field: "name",
                    label:"标题",
                    component:"Input",
                    componentProps:{
                        size:"small"
                    },
                    labelCol:{ span: 12}
                },
                {
                    field: "permission_rules",
                    component:"RuleForm",
                    componentProps: {
                        attrs: this.complete,
                        options: this.options
                    },
                },
            ]
        },
        ...mapGetters([
            'complete',
            "options"
        ])
    },
    created() {
        this.$store.dispatch("getData")
    }
}
</script>

<style scoped>

</style>
