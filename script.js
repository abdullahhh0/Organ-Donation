// =========================
// APPOINTMENTS DATA
// =========================

const appointments = [

    {
        user: "John Doe",
        organ: "Kidney",
        date: "2024-11-01",
        hospital: "City Hospital"
    },

    {
        user: "Jane Smith",
        organ: "Liver",
        date: "2024-11-05",
        hospital: "Healthcare Center"
    },

    {
        user: "Mark Wilson",
        organ: "Heart",
        date: "2024-11-10",
        hospital: "General Hospital"
    }
];

// =========================
// HOSPITALS DATA
// =========================

const hospitals = [

    {
        name: "City Hospital",

        requirements: [
            "Kidney",
            "Liver"
        ],

        description:
            "We need kidney donors urgently to support critical patients."
    },

    {
        name: "Healthcare Center",

        requirements: [
            "Heart",
            "Lung"
        ],

        description:
            "Looking for heart and lung donors to assist transplant surgeries."
    },

    {
        name: "General Hospital",

        requirements: [
            "Eye",
            "Skin"
        ],

        description:
            "We require cornea and skin donors to treat burn and injury patients."
    }
];

// =========================
// LOAD APPOINTMENTS
// =========================

function loadAppointments(){

    const appointmentList =
        document.getElementById("appointment-list");

    if(!appointmentList) return;

    appointments.forEach((appointment) => {

        const card =
            document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <h3>${appointment.user}</h3>

            <p>
                <strong>Organ:</strong>
                ${appointment.organ}
            </p>

            <p>
                <strong>Date:</strong>
                ${appointment.date}
            </p>

            <p>
                <strong>Hospital:</strong>
                ${appointment.hospital}
            </p>
        `;

        appointmentList.appendChild(card);
    });
}

// =========================
// LOAD HOSPITALS
// =========================

function loadHospitals(){

    const hospitalList =
        document.getElementById("hospital-list");

    if(!hospitalList) return;

    hospitals.forEach((hospital) => {

        const card =
            document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <h3>${hospital.name}</h3>

            <p>
                ${hospital.description}
            </p>

            <p>

                <strong>
                    Required Organs:
                </strong>

                ${hospital.requirements.join(", ")}

            </p>
        `;

        hospitalList.appendChild(card);
    });
}

// =========================
// REGISTER
// =========================

const registerForm =
    document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const name =
                document.getElementById("registerName").value;

            const email =
                document.getElementById("registerEmail").value;

            const password =
                document.getElementById("registerPassword").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            // PASSWORD MATCH

            if(password !== confirmPassword){

                alert("Passwords do not match");

                return;
            }

            // EXISTING ACCOUNT CHECK

            const existingUser =
                localStorage.getItem(email);

            if(existingUser){

                alert("Email already registered");

                return;
            }

            // SAVE USER

            const user = {

                name: name,
                email: email,
                password: password
            };

            localStorage.setItem(
                email,
                JSON.stringify(user)
            );

            alert("Registration Successful");

            window.location.href =
                "index.html";
        }
    );
}

// =========================
// LOGIN
// =========================

const loginForm =
    document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const email =
                document.getElementById("loginEmail").value;

            const password =
                document.getElementById("loginPassword").value;

            // FIND USER

            const user =
                JSON.parse(
                    localStorage.getItem(email)
                );

            // ACCOUNT CHECK

            if(!user){

                alert("Account not found");

                return;
            }

            // PASSWORD CHECK

            if(user.password !== password){

                alert("Incorrect Password");

                return;
            }

            // SUCCESS

            alert("Login Successful");

            window.location.href =
                "dashboard.html";
        }
    );
}

// =========================
// PAGE LOAD
// =========================

window.onload = () => {

    loadAppointments();

    loadHospitals();
};
