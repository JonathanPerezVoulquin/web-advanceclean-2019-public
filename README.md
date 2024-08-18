# WEB AVANCE CLEAN (public format)

www.advanceclean.com.ar/limpieza-de-sillones-y-tapizados.html

page created in 2019 (public version) with some .php files ignored with .gitignore. Due to the fact that I added new functions such as a cost simulator, form submission through gmail with an smtp server, and some changes and improvements in performance and SEO

# MODIFICATIONS

# Adding a slider 
to give it a little more dynamism with some buttons the lead to whatsapp and calls

![carrousel](https://github.com/JonathanPerezVoulquin/web-advanceclean-2019-public/assets/76247835/b4aa1b96-ad51-4edc-8efb-686773ddc960)

# Adding a contact form some PHP, JavaScript Fetch
I made a contact form with the inputs name, email, subject and message.
The form has a form = action ="process-form.php" 
which in turn is captured by js fetch medi, which is responsible for doing the request without reloading the page



## Example Form:
url: https://www.advanceclean.com.ar/limpieza-de-sillones-y-tapizados.html
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
![contact form](https://github.com/JonathanPerezVoulquin/web-advanceclean-2019-public/assets/76247835/02f9146d-00f9-4f7c-a025-396c63c33143)

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
# Calculator with PHP, JS and HTML

It is a cost simulator, which has all the logic of the calculator in php, and is implemented in js and html5.
The route to test it is the following:
https://www.advanceclean.com.ar/calculadora.html.
It is not indexed because it is not for public use even without improving the appearance and making a login
![calculadora precios](https://github.com/JonathanPerezVoulquin/web-advanceclean-2019-public/assets/76247835/71ce7caf-d7c9-4932-9de0-7ecb8a430808)
