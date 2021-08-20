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
			}),500)
		}
		if ($countOfData == 3){
			paint()
		}
	}else {
		if (deleteNode == null) {
			const errorMessage = document.createTextNode(`Can't be zero`)
			h5.appendChild(errorMessage)
			h5.style.display = 'inline'
			let id = this.name
			const element= document.querySelector('#' + id)
			element.insertBefore(h5, element.children[1])
			console.log(element)
			
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


// this.style.display = 'block'
			// const text = document.createTextNode(`Can't be zero`)
			// this.id = 'inputText'
			// const child = document.querySelector('#inputText')
			// p.appendChild(text)
			// let m = this.parentNode.id
			// let l = document.querySelector('#'+m).insertBefore(p, child)
			// console.log(l)
			// this.removeAttribute('id')