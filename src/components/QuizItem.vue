<template>
    <div>
        <h1 class="quiz-title align-center">
            {{ data.title }}
        </h1>
        <div class="quiz-desc align-center">
            {{ data.question }}            
        </div>

        <ul class="quiz-answer-list">
            <li 
                class="quiz-item" 
                :class="{'success': getClassState && index === getItemIndex, 
                'error': !getClassState && index === getItemIndex, 
                'active': !getClassState && correctIndex === index && (getItemIndex || getItemIndex === 0), 
                'disabled': data.isClicked}"
                v-for="(item, index) in data.incorrect_answers" 
                :key="index" 
                @click="meth(item, index)">
                <div class="quiz-image" v-show="item.image">
                    <img :src="item.image" alt="">
                </div>
                <div class="quiz-text">
                    <p>
                        {{ item.answer }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    props: {
        data: Object
    },

    data() {
        return {
            
            correctIndex: false
        }
    },

    computed: {
        getItemIndex() {
            return this.$store.getters.getItemIndex
        },

        getClassState() {
            return this.$store.state.isTrue
        }
    },

    methods: {
        
        meth(object, i) {
            if(this.data.isClicked === true) return

            const correct = this.data.correct_answer.answer
            const answers = this.data.incorrect_answers

            if(this.getItemIndex !== null) return
            
            if(object.answer === correct) {
                this.$store.commit('SET_SCORE', 1)
                this.$store.commit('SET_CLASS', true)
            } else {
                this.$store.commit('SET_CLASS', false)
            }

            this.$store.commit('SET_ITEM_INDEX', i)
            // this.itemIndex = i
            


            console.log(object.answer, correct, i)
            
            this.$emit('setScore', this.isTrue)

            for(let i = 0; i < answers.length; i++) {
                if(answers[i].answer === correct) {
                    this.correctIndex = i
                }
            }

            this.$emit('setClicked')
            // this.$store.commit('SET_CLICKED', this.data.id)
        }
    }
}
</script>