function addNewWeField() {
	let newNode = document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('weField');
	newNode.classList.add('mt-2');
	newNode.setAttribute('rows', 3);
	newNode.setAttribute('placeholder', 'Enter Your Work')

	let weOb = document.getElementById('we');
	let weAddButtonOb = document.getElementById('weAddButton');

	weOb.insertBefore(newNode, weAddButtonOb)
}



function addNewaqField() {
	let newNode = document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('eqField');
	newNode.classList.add('mt-2');
	newNode.setAttribute('rows', 3);
	newNode.setAttribute('placeholder', 'Enter Academic Qualification')
	let aqOb = document.getElementById('aq');
	let aqAddButton = document.getElementById('aqAddButton');
	aqOb.insertBefore(newNode, aqAddButton)
}



function CreateCV() {
	// Form Field
	let nameFiled = document.getElementById('nameField').value;
	let contactFiled = document.getElementById('contactField').value;
	let addressField = document.getElementById('addressField').value;
	let facebookField = document.getElementById('fbField').value;
	let twitterField = document.getElementById('twField').value;
	let linkedinField = document.getElementById('linkField').value;
	let objectiveField = document.getElementById('objectiveField').value;
	// CV
	let name = document.getElementById('fName').innerHTML = nameFiled;
	let nameB = document.getElementById('fnameB').innerHTML = nameFiled;
	let phoneNumber = document.getElementById('phoneNumber').innerHTML = contactFiled;
	let address = document.getElementById('address').innerHTML = addressField;
	let facebook = document.getElementById('facebook').innerHTML = facebookField;
	let twitter = document.getElementById('twitter').innerHTML = twitterField;
	let linkedin = document.getElementById('linkedin').innerHTML = linkedinField;
	let objective = document.getElementById('objective').innerHTML = objectiveField;

	// Work Experience
	let wes = document.getElementsByClassName('weField');
	let str = '';
	for(let e of wes) {
		str = str + `<li>${e.value}</li>`;
	}
	document.getElementById('workE').innerHTML = str;

	// Academic qulification
	let aq = document.getElementsByClassName('eqField');
	let str1 = '';
	for(let a of aq) {
		str1 = str1 + `<li>${a.value}</li>`;
	}
	document.getElementById('academic').innerHTML = str1;


	// Image Setting function here
	let file = document.getElementById('imageField').files[0];
	let reader = new FileReader();
	reader.readAsDataURL(file);
	let img = document.getElementById('image');
	reader.onloadend = function() {
		img.src = reader.result;
	}






	document.getElementById('cv-template').style.display = 'block';
	document.getElementById('cv-form').style.display = 'none';
}


function printCV() {
	window.print();
}