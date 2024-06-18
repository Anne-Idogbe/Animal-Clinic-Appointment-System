function submitForm() {
    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.innerHTML = '');

    // Get form values
    const ownerName = document.getElementById('ownerName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const petName = document.getElementById('petName').value.trim();
    const age = document.getElementById('age').value.trim();
    const petType = document.getElementById('petType').value.trim();
    const breed = document.getElementById('breed').value.trim();
    const appointmentDate = document.getElementById('appointmentDate').value.trim();
    const appointmentTime = document.getElementById('appointmentTime').value.trim();
    const appointmentType = document.getElementById('appointmentType').value.trim();
    const followUp = document.getElementById('followUp').value.trim();
    const veterinarian = document.getElementById('veterinarian').value.trim();

    // Validate form fields
    let valid = true;

    if (ownerName === '') {
        document.getElementById('ownerNameError').innerHTML = 'Owner name is required.';
        valid = false;
    }
    if (phone === '') {
        document.getElementById('phoneError').innerHTML = 'Phone number is required.';
        valid = false;
    }
    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Email is required.';
        valid = false;
    }
    if (petName === '') {
        document.getElementById('petNameError').innerHTML = 'Pet name is required.';
        valid = false;
    }
    if (age === '') {
        document.getElementById('ageError').innerHTML = 'Pet age is required.';
        valid = false;
    }
    if (petType === '') {
        document.getElementById('petTypeError').innerHTML = 'Pet type is required.';
        valid = false;
    }
    if (breed === '') {
        document.getElementById('breedError').innerHTML = 'Breed is required.';
        valid = false;
    }
    if (appointmentDate === '') {
        document.getElementById('appointmentDateError').innerHTML = 'Appointment date is required.';
        valid = false;
    }
    if (appointmentTime === '') {
        document.getElementById('appointmentTimeError').innerHTML = 'Appointment time is required.';
        valid = false;
    }
    if (appointmentType === '') {
        document.getElementById('appointmentTypeError').innerHTML = 'Appointment type is required.';
        valid = false;
    }
    if (followUp === '') {
        document.getElementById('followUpError').innerHTML = 'Follow-up information is required.';
        valid = false;
    }
    if (veterinarian === '') {
        document.getElementById('veterinarianError').innerHTML = 'Preferred veterinarian is required.';
        valid = false;
    }

    // If form is valid, show summary
    if (valid) {
        const summary = `
            <h2>Appointment Summary</h2>
            <p><strong>Owner Name:</strong> ${ownerName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Pet Name:</strong> ${petName}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Type of Pet:</strong> ${petType}</p>
            <p><strong>Breed:</strong> ${breed}</p>
            <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
            <p><strong>Appointment Time:</strong> ${appointmentTime}</p>
            <p><strong>Type of Appointment:</strong> ${appointmentType}</p>
            <p><strong>Follow-up:</strong> ${followUp}</p>
            <p><strong>Preferred Veterinarian:</strong> ${veterinarian}</p>
            <p><strong>Consultation Fee:</strong> $50</p>
        `;

        document.getElementById('summary').innerHTML = summary;
    } else {
        document.getElementById('summary').innerHTML = '';
    }
}
