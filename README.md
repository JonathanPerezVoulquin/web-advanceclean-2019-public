# WEB AVANCE CLEAN (public format)
page created in 2019 (public version) with some .php files ignored with .gitignore. Due to the fact that I added new functions such as a cost simulator, form submission through gmail with an smtp server, and some changes and improvements in performance and SEO

# MODIFICATIONS

# Adding a slider 
to give it a little more dynamism with some buttons the lead to whatsapp and calls
> ![carrousel](https://private-user-images.githubusercontent.com/76247835/260291676-23098555-d52c-467a-91ef-09888aa954a6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTIxNDgzOTYsIm5iZiI6MTY5MjE0ODA5NiwicGF0aCI6Ii83NjI0NzgzNS8yNjAyOTE2NzYtMjMwOTg1NTUtZDUyYy00NjdhLTkxZWYtMDk4ODhhYTk1NGE2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA4MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwODE2VDAxMDgxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcyZDc1ZGViZWFkMGIzNmI0YmU0NGZmYTM5OGJjODdlY2I0NzNlYjI0OGUyNjM5ZjkxZGQ5MDEyYWUyZGM2OGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.K9C3j_Yr3wB6c8nYwSfFviTGA7S7sAaLBavtm4fdPFU)

# Adding a contact form 
I made a contact form with the inputs name, email, subject and message.
The form has a form = action ="process-form.php" 
which in turn is captured by js fetch medi, which is responsible for doing the request without reloading the page
> ![github](https://private-user-images.githubusercontent.com/76247835/260291300-2f2863da-3703-4f5a-928e-430569e1e226.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTIxNDg2OTMsIm5iZiI6MTY5MjE0ODM5MywicGF0aCI6Ii83NjI0NzgzNS8yNjAyOTEzMDAtMmYyODYzZGEtMzcwMy00ZjVhLTkyOGUtNDMwNTY5ZTFlMjI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA4MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwODE2VDAxMTMxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYzMzMwNDI5OTZmOWE2ZTcyNWRkNDdlYzIwYTY0ZjNkYjllMTk2NmE0N2M5N2ExZWM2YTViZmNlOTAxYWJjODcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.AC86yT6jKC46r2iAPNKm7gXI5mCDQbHFiYmgLvGGJaw)

## Example Form:
 ```html
<form action="process_form.php" method="POST" id="contactForm">
                <div class="col-md-6 padding-right-zero">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="name" data-rule="required" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="required" data-msg="Please enter a valid email" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="subject" data-rule="minlen:4 required" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validation"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
                    <div class="validation"></div>
                  </div>				  
                  <button type="submit" class="btn btn-primary btn-submit" id="submitBtn">ENVIAR</button>
				  <div id="statusMessage"></div>
                </div
</form>
```

## Example FETCH JavaScript:
```javascript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita la recarga de página por defecto

        // Crea un objeto FormData con los datos del formulario
        const formData = new FormData(form);

        // Envía los datos al servidor usando Fetch API
        fetch("process_form.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            statusMessage.innerHTML = data; // Muestra el mensaje de estado en la página
        })
        .catch(error => {
            statusMessage.innerHTML = "Ocurrió un error inesperado."; // Manejo de errores
        });
    });
});
```

