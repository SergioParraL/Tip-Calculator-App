// ( bill * percentage ) / Number People == tip mount
// ((bill * percentage ) + bill) / numberPeople == total 
let $button = document.querySelector('button')

$button.addEventListener('click',((e)=>{
	e.preventDefault()
}))

let $bill = document.querySelector('#bill')
let $numberPeople = document.querySelector('#people')
let $percentage = document.querySelectorAll('.percentage')

function calculator (bill,pertg,peopleN) {
	this.bill = bill
	this.pertg = pertg
	this.peopleN = peopleN
	
	let base = this.bill * this.percentage
	
	this.tipMount = (() =>{ // return the tip that each one must give 
		return base  / this.peopleN
	})
	this.total = (() => { // return the amount total to pay
		return (base + this.bill ) / this.peopleN 
	})
}


$bill.addEventListener('keydown',input)
$numberPeople.addEventListener('keydown',input)

function input (e) {
	console.log(arguments)
}