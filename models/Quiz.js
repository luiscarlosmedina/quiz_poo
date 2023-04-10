
import {Question} from "./Question.js"

export class Quiz{
	questionIndex = 0
	score = 0

	constructor(questions){
		this.questions = questions
	}

	getQuestionIndex(){
		return this.questions[this.questionIndex]
	}

	isEnded(){
		return this.questions.length === this.questionIndex;
	}

	guess(answer){
		if(this.getQuestionIndex().CorrectAnswer(answer)){
			this.score++
		}
		this.questionIndex++
	}
}