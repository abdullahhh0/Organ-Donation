const appointments = [
    { user: "John Doe", organ: "Kidney", date: "2024-11-01", hospital: "City Hospital" },
    { user: "Jane Smith", organ: "Liver", date: "2024-11-05", hospital: "Healthcare Center" },
    { user: "Mark Wilson", organ: "Heart", date: "2024-11-10", hospital: "General Hospital" }
];

const hospitals = [
    {
        name: "City Hospital",
        requirements: ["Kidney", "Liver"],
        description: "We need kidney donors urgently to support critical patients."
    },
    {
        name: "Healthcare Center",
        requirements: ["Heart", "Lung"],
        description: "Looking for heart and lung donors to assist transplant surgeries."
    },
    {
        name: "General Hospital",
        requirements: ["Eye", "Skin"],
        description: "We require cornea and skin donors to treat burn and injury patients."
    }
];

function loadAppointments() {
    const appointmentList = document.getElementById("appointment-list");
    appointments.forEach((appointment) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${appointment.user}</h3>
            <p>Organ: ${appointment.organ}</p>
            <p>Date: ${appointment.date}</p>
            <p>Hospital: ${appointment.hospital}</p>
        `;
        appointmentList.appendChild(card);
    });
}

function loadHospitals() {
    const hospitalList = document.getElementById("hospital-list");
    hospitals.forEach((hospital) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${hospital.name}</h3>
            <p>${hospital.description}</p>
            <p><strong>Required Organs:</strong> ${hospital.requirements.join(", ")}</p>
        `;
        hospitalList.appendChild(card);
    });
}

function switchForm(formType) {
    const signupForm = document.getElementById("signup-form");
    const signinForm = document.getElementById("signin-form");
    const signupTab = document.getElementById("signup-tab");
    const signinTab = document.getElementById("signin-tab");

    if (formType === "signup") {
        signupForm.classList.add("active-form");
        signinForm.classList.remove("active-form");
        signupTab.classList.add("active");
        signinTab.classList.remove("active");
    } else {
        signinForm.classList.add("active-form");
        signupForm.classList.remove("active-form");
        signinTab.classList.add("active");
        signupTab.classList.remove("active");
    }
}

function toggleCertificateField() {
    const userType = document.getElementById("user-type").value;
    const certificateField = document.getElementById("certificate-field");
    if (userType === "hospital") {
        certificateField.classList.remove("hidden");
    } else {
        certificateField.classList.add("hidden");
    }
}

function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const userType = document.getElementById("user-type").value;
    const certificate = document.getElementById("certificate").files[0];

    if (userType === "hospital" && !certificate) {
        alert("Please upload a certificate for verification.");
        return false;
    }

    alert(`Registered successfully as ${userType}!`);
    
    // Redirect to the homepage after successful registration
    window.location.href = 'index.html'; // Change this to your actual homepage URL
    return false;
}

function handleSignin(event) {
    event.preventDefault();
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    // Perform your authentication logic here

    // For demonstration, we'll assume the login is successful
    alert(`Welcome back, ${username}!`);
    
    // Redirect to the homepage
    window.location.href = 'index.html'; // Change this to your actual homepage URL
    return false;
}

window.onload = () => {
    loadAppointments();
    loadHospitals();
};
