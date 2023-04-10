export class Question{

	constructor(text,choices,answer){

		this.text = text;
		this.choices = choices;
		this.answer	= answer;

	}

	CorrectAnswer(choices) {

		return choices == this.answer;

	}
		
}

