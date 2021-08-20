// ( bill * percentage ) / Number People == tip mount
// ((bill * percentage ) + bill) / numberPeople == total 
const $button = document.querySelectorAll('button')
const $input = document.querySelectorAll('input[type=text]')
let $countOfData = 0 
const $errorMessage = `Can't be zero` 
let $count = {
	bill : 0,
	personNum : 0,
	percent : 0,
	tipMount : function () {
		return ((this.bill * this.percent) / 100 ) / this.personNum
	},
	total : function (){
		return (((this.bill * this.percent) / 100 ) + this.bill) / this.personNum
	}
}

$button.forEach( function(e,i) {
	e.addEventListener('click',((e)=>{
		e.preventDefault()
		let q = parseInt(e.target.name)
		$count.percent = q
		$countOfData++
		// gap(q)
	}))
});

$input.forEach( function(e) {
	e.addEventListener('blur',input)
});

function input () {
	const attr = this.getAttribute('name')
	const float = parseFloat(this.value)
	if (float > 0 && float != NaN) {
 		if( attr == 'bill'){
			console.log('¡Tío bill eres tú!')
			$count.bill = float
			$countOfData++ 
		}
		if (attr == 'people') {
			console.log('people')
			$count.personNum = float
			$countOfData++ 
			
		}
		if (attr == 'custom') {
			console.log('custom')
			$count.percent = float
			$countOfData++ 
		}
		if ($countOfData == 3){
			paint()
		}
	}else {
		console.log(this)
		const span = document.createElement('span')
		const text = document.createTextNode($errorMessage)
		span.appendChild(text)
		span.id = 'span'
		this.parentNode.appendChild(span)
		setTimeout((() => {
			const deleteNode = document.querySelector('#span')
			deleteNode.parentNode.removeChild(deleteNode)
		}),5000)
		// this.parentNode.innerHTML = "<p>$errorMessage</p>"
		// console.log($errorMessage)
	}
}

function paint () {
	$countOfData = 0
	let objTotal = $count.total()
	let objTip = $count.tipMount()

	let tip = document.querySelector('#tip_Amount')
	let total = document.querySelector('#total')

	tip.innerHTML = objTip.toFixed(2)
	total.innerHTML = objTotal.toFixed(2)
}