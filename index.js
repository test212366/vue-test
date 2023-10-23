// const App = {
//     data() {
//         return {
//             placeholder: 'input...',
//             title: 'TODO: ',
//             inputValue: '',
//             notes: [
//                 'Заметка 1'
//             ]
//         }
//     },
//     methods: {
//         addNewNode() {
//             if(this.inputValue) {
//                 this.notes.push(this.inputValue)
//                 this.inputValue = ''
//             }
//         },
//         toUpperCase(item) {
//             return item.toUpperCase()
//         },
//         removeNode(i) {
//             this.notes.splice(i, 1)
//         }
//
//     },
//     computed:  { // вычисление
//
//     },
//     watch: { // слушатель изменений
//         inputValue(value) {
//             this.inputValue = value
//         }
//     }
// }
//
// Vue.createApp(App).mount('#app')

const App = {
    data() {
        return {
            title: 'Я title',
            html: '<h2>Vue 3 app :D</h2>'
        }
    }
}


Vue.createApp(App).mount('#app')
