export class UI{
	constructor(){}

	showQuestion(text){
		const questionTitle = document.getElementById("question");
		questionTitle.innerText = text;

	}
	showChoices(choices, callBack){
		const choicesContainer = document.getElementById("choices");
		choicesContainer.innerHTML = "";
		for( let i = 0; i < choices.length; i++){
			const button = document.createElement("button");
			button.innerText = choices[i];
			button.className = "button";
			button.addEventListener("click",() => callBack(choices[i]));

			choicesContainer.append(button);
		}
	}
	showScore(score){
		const quizEnd = '<h1> tu resultado es </h1>' + score;
		const element = document.getElementById("quiz");
		element.innerHTML = quizEnd;
	}
	showProgress(indexProg){
		const progress = document.getElementById("progress");
		progress.innerText = "Estas en la pregunta " + (indexProg+1);
	}
}