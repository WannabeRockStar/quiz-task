<template>
	<div class="home">
		<Modal v-if="isOpen" :isOpen="isOpen" @closeModal="isOpen = false" />
		<Aside />

        <main>
            <Header />
            
            <section class="wrapper">
                <div class="quiz-content">
                    <!-- {{ getQuiz }} -->
					<QuizItem :data="getQuiz[getIndex]" @setClicked='setClicked' />
                    <div class="quiz-controller">
                        <!-- <button class="btn btn-primary btn-rounded" @click="getNext">Accept</button> -->
                        <button v-show="getIndex !== getQuiz.length - 1" class="btn btn-default btn-rounded" @click="getNext">Next</button>
                        <button class="btn btn-default btn-rounded" @click="isOpen = true">Finish</button>
                    </div>

                    <div class="pagination">
                        <ul class="pagination-list">
                            <li 
								class="pagination-item" 
								:class="{'active': page === (getIndex + 1)}" 
								v-for="page in getQuiz.length" :key="page"
								@click="setPage(page)"
								>
								{{ page }}
							</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <footer></footer>
	</div>
</template>

<script>
// @ is an alias to /src
import Aside from '@/components/Aside'
import Header from '@/components/Header'
import QuizItem from '@/components/QuizItem'
import Modal from '@/components/Modal'

export default {
	name: 'Home',
	components: { Aside, Header, QuizItem, Modal },
	data() {
		return {
			index: 0,
			isOpen: false
		}
	},

	computed: {
		getQuiz() {
			const arr = JSON.parse(JSON.stringify(this.$store.getters.getQuiz))
			return arr
				.map(item => {
					item.incorrect_answers.push(item.correct_answer)
					item.incorrect_answers.sort(() => Math.random() - 0.5)
					return item
				})
		},

		getIndex() {
			return this.$store.state.quizIndex
		}
	},
 
	methods: {
		setClicked() {
			this.getQuiz[this.getIndex].isClicked = true
		},

		getNext() {
			if(this.getIndex === this.getQuiz.length - 1) return
			
			this.$store.commit('SET_ITEM_INDEX', null)
			this.$store.commit('SET_CLASS', false)
			this.$store.commit('SET_QUIZ_INDEX')
		},

		setPage(id) {
			this.$store.commit('SET_ITEM_INDEX', null)
			this.$store.commit('SET_CLASS', false)
			this.$store.commit('SET_QUIZ_INDEX', id - 1)
		}
	}
}
</script>
