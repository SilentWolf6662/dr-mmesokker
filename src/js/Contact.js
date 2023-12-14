function validateEmail() {
    let str = document.contactForm.email.value
	let email = str.toLowerCase()

	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //console.log(email)

	if (email === '') {
		document.getElementById('validationEmailResult').innerHTML = 'Indtast venligst en gyldig email adresse'
		return false
	}

    if (!email.match(mailFormat)) {
        document.getElementById('validationEmailResult').innerHTML = 'Indtast venligst en gyldig email adresse'
		return false
    }

    document.getElementById('validationSubjectResult').innerHTML = ''
	return true
}

function validateSubject() {
    let str = document.contactForm.subject.value
	let subject = str.charAt(0).toUpperCase() + str.slice(1);

    //console.log(subject)

	if (subject === '') {
		document.getElementById('validationSubjectResult').innerHTML = 'Indtast venligst et emne'
		return false
	}

    document.getElementById('validationSubjectResult').innerHTML = ''
	return true
}

function validateMessage() {
    let str = document.contactForm.message.value
	let message = str.charAt(0).toUpperCase() + str.slice(1);

    //console.log(message)

	if (message === '') {
		document.getElementById('validationMessageResult').innerHTML = 'Indtast venligst en besked'
		return false
	}

    document.getElementById('validationMessageResult').innerHTML = ''
	return true
}

function validateForm() {
	if (!validateEmail()) {
		return false
	}

    if (!validateSubject()) {
        return false
    }

    if (!validateMessage()) {
        return false
    }

	return true
}

function sendMessage() {
	if (validateForm()) {
		alert('Din besked er blevet sendt')
		document.contactForm.reset()
	} else {
		alert('Check at alle felter er udfyldt korrekt')
	}
}
