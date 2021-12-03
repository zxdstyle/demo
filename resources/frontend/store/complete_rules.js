import CompleteAttr from "../api/complete_attr"

export default {
    state: {
        rules : []
    },
    mutations: {
        setRules (state, rules) {
            state.rules = rules
        }
    },
    actions: {
        async getData (context) {
            let data = await CompleteAttr.Index({"query[app]": "huacha"})
            context.commit('setRules', data)
        }
    },
    getters: {
        complete: state => {
            let data = {}
            state.rules.forEach(item => {
                data[item.key] = item
            })
            return data
        },
        options: state => {
            let data = []
            state.rules.forEach(item => {
                data.push({
                    value: item.key,
                    label: item.name,
                })
            })
            return data
        }
    }
}
