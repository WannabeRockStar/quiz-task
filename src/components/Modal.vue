<template>
    <div class="modal-container">
        <div class="modal" ref="Modal">
            <h2 class="modal-title">Your Score</h2>
            <div class="score-box">
                {{getScore}}/{{ getLength }}
            </div>
            <div class="modal-controller">
                <button class="btn btn-primary btn-rounded" @click="resetQuiz">Play Again</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: Boolean
    },

    data() {
        return { }
    },

    computed: {
        getScore() {
            return this.$store.state.score
        },

         getLength() {
            return this.$store.state.data.length
        }
    },

    methods: {
        closeModal() {
            console.log('dzgneri')
            this.$emit('closeModal')
        },

        resetQuiz() {
            this.$emit('closeModal')
            this.$store.commit('RESET_SCORE', 0)
            this.$store.commit('SET_CLASS', false)
            this.$store.commit('SET_ITEM_INDEX', null)
            this.$store.commit('RESET_QUIZ_INDEX')
            this.$store.commit('SET_CLICKED')
        }
    },

    mounted() {
        // console.log(this.$refs.Modal)
        document.addEventListener("click", (e) => {
            
            if(e.target.classList.contains('modal-container') && 
                !e.target.classList.contains('modal')) {
                this.closeModal()
            }
        })
    }
}
</script>

<style scoped>
    .modal-container {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        background: rgba(62, 100, 255, .1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        padding: 4rem;
        background: #fff;
        text-align: center;
        border-radius: 20px;
    }

    .modal-title {
        padding-bottom: 1rem;
    }

    .score-box {
        padding-bottom: 1rem;
        font-size: 1.5rem;
        font-family: 'roboto-bold';
        color: #3e64ff;
    }

    .btn-controller {

    }
</style>