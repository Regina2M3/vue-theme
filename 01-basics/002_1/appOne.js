const App = {
    data() {
        return {
            myPlaceholder: 'type here...',
            title: 'Notes List',
            inputValue: '',
            notes: ['note 1', 'note 2']
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },

        addNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },

        // inputKeypress(event) {
        //     if (event.key === 'Enter') {
        //         this.addNote()
        //     }
        // }

        removeNote(i, $event) {
            // console.log(i);
            this.notes.splice(i, 1)
            
        },

        toUpper(item) {
            return item.toUpperCase()
        },

    },

    computed: {
        doubleCount() {
            return this.notes.length * 2 // works only when this.notes is changed 
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')