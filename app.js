// Selecting form and output area
const form = document.getElementById('resumeForm');
const resumeContent = document.getElementById('resumeContent');
const resumePreview = document.getElementById('resumePreview');

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form from submitting

    // Get user inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const education = document.getElementById('education').value;
    const work = document.getElementById('work').value;
    const skills = document.getElementById('skills').value.split(',');

    // Generate the resume content dynamically
    resumeContent.innerHTML = `
        <h3>${name}</h3>
        <div class="contact-info">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact No:</strong> ${number}</p>
        </div>

        <h4>Education</h4>
        <p>${education}</p>
        
        <h4>Work Experience</h4>
        <p>${work}</p>
        
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;

    // Display the generated resume
    resumePreview.style.display = 'block';
});
