// // Selecting form and output area
// const form = document.getElementById('resumeForm') as HTMLFormElement;
// const resumeContent = document.getElementById('resumeContent') as HTMLElement;
// const resumePreview = document.getElementById('resumePreview') as HTMLElement;

// // Event listener for form submission
// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault();  // Prevent form from submitting

//     // Get user inputs
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const work = (document.getElementById('work') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

//     // Generate the resume content dynamically
//     resumeContent.innerHTML = `
//         <h3>${name}</h3>
//         <p><strong>Email:</strong> ${email}</p>
        
//         <h4>Education</h4>
//         <p>${education}</p>
        
//         <h4>Work Experience</h4>
//         <p>${work}</p>
        
//         <h4>Skills</h4>
//         <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
//     `;

//     // Display the generated resume
//     // resumePreview.style.display = 'block';
// });
