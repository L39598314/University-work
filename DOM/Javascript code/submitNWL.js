const form = document.getElementById('SignUPHFR'); /* */
        const Name = document.getElementById('Name');
        const email = document.getElementById('EmailAddress');
        
        form.addEventListener('submit', function(e){ 
            e.preventDefault();
/* the source of this code comes a youtube video who explained how to get information
and store the name and email address properly in javascript
    here is the link to the youtube video:
   https://www.youtube.com/watch?v=x0VcigW9kN0   */

            const namevalue = Name.value;
            const emailaddvalue = email.value;

            localStorage.setItem('Name', namevalue);
            localStorage.setItem('Email', emailaddvalue);


            window.location.href = "formoutput.html";
        })
        