function mostrarSeccionServicio() {
    const servicio = document.getElementById('servicio').value;

    document.getElementById('sillones-section').style.display = servicio === 'sillones' ? 'block' : 'none';
    document.getElementById('alfombras-section').style.display = servicio === 'alfombras' ? 'block' : 'none';
    document.getElementById('carpetas-lana-section').style.display = servicio === 'carpetas_lana' ? 'block' : 'none';
    document.getElementById('carpetas-nylon-section').style.display = servicio === 'carpetas_nylon' ? 'block' : 'none';
    document.getElementById('resultado-section').style.display = 'none';
}

document.getElementById('servicio').addEventListener('change', mostrarSeccionServicio);

function calcularSillones() {
    const cuerpos = parseInt(document.getElementById('cuerpos').value);
    const servicio = document.getElementById('servicio').value;
    if (servicio === 'sillones') {
        const data = {
            servicio: servicio,
            cuerpos: cuerpos
        };
        enviarPeticion(data, mostrarResultadoSillones);
    }
}

function calcularAlfombras() {
    const mts2 = parseFloat(document.getElementById('mts2').value);
    const servicio = document.getElementById('servicio').value;
    if (servicio === 'alfombras') {
        const data = {
            servicio: servicio,
            mts2: mts2
        };
        enviarPeticion(data, mostrarResultadoAlfombras);
    }
}

function calcularCarpetasLana() {
    const mts2 = parseFloat(document.getElementById('mts2-carpetas-lana').value);

    const data = {
        servicio: 'carpetas_lana',
        mts2: mts2
    };

    enviarPeticion(data, mostrarResultadoCarpetasLana);
}

function calcularCarpetasNylon() {
    const mts2 = parseFloat(document.getElementById('mts2-carpetas-nylon').value);

    const data = {
        servicio: 'carpetas_nylon',
        mts2: mts2
    };

    enviarPeticion(data, mostrarResultadoCarpetasNylon);
}

function enviarPeticion(data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const resultado = JSON.parse(xhr.responseText);
            document.getElementById('resultado').value = `= $${resultado.total}`;
            document.getElementById('resultado-section').style.display = 'block';
            callback(resultado.total);
        }
    };
    xhr.open("POST", "calculadora.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(JSON.stringify(data));
}

function mostrarResultadoSillones(resultado) {
    document.getElementById('resultado').textContent = `Resultado: $${resultado}`;
}

function mostrarResultadoAlfombras(resultado) {
    document.getElementById('resultado').textContent = `Resultado: $${resultado}`;
}

function mostrarResultadoCarpetasLana(resultado) {
    document.getElementById('resultado').textContent = `Resultado: $${resultado}`;
}

function mostrarResultadoCarpetasNylon(resultado) {
    document.getElementById('resultado').textContent = `Resultado: $${resultado}`;
}

function limpiarCalculadora() {
    document.getElementById('cuerpos').value = '';
    document.getElementById('mts2').value = '';
    document.getElementById('mts2-carpetas-lana').value = '';
    document.getElementById('mts2-carpetas-nylon').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('resultado-section').style.display = 'none';
}
