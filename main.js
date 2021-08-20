// ( bill * percentage ) / Number People == tip mount
// ((bill * percentage ) + bill) / numberPeople == total 
const $button = document.querySelectorAll('button')
const $input = document.querySelectorAll('input[type=text]')
let $countOfData = 0  
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
	}))
});

$input.forEach( function(e) {
	e.addEventListener('blur',input)
});

function input () {
	const attr = this.getAttribute('name')
	const float = parseFloat(this.value)
	
	const h5 = document.createElement('h5')
	h5.id = 'h5'
	const id = this.name
	const element= document.querySelector('#' + id)

	const deleteNode = document.querySelector('#h5')

	if (float > 0 && float != NaN) {

		switch (attr) {
			case 'bill':
				console.log('¡Tío bill eres tú!')
				$count.bill = float
				$countOfData++ 
				break;
			case 'people':
				console.log('people')
				$count.personNum = float
				$countOfData++
				break;
			case 'custom':
				console.log('custom')
				$count.percent = float
				$countOfData++
				break;
		}
		if (deleteNode != null) {
			setTimeout((() => {
				deleteNode.parentNode.removeChild(deleteNode)
				element.children[0].removeAttribute('class')
			}),500)
		}
		if ($countOfData == 3){
			paint()
		}
	}else {
		if (deleteNode == null) {
			if (id == 'custom') {element.style.display = 'block'}
			const errorMessage = document.createTextNode(`Can't be zero`)
			h5.appendChild(errorMessage)
			h5.style.display = 'inline'
			h5.style.color = 'red'
			element.children[0].classList.add('h5Inline')
			element.insertBefore(h5, element.children[1])
			console.log(element.children[0])
		}
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

let reset = document.querySelector('#reset')
	reset.addEventListener('click',(() => {
	const show = document.querySelectorAll('.showBox')
	show.forEach( function(e) {
		e.innerHTML = "$0.00"
	});
}))