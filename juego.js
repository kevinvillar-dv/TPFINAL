document.addEventListener('DOMContentLoaded', () => {
    let dropZones = document.querySelectorAll('.caja');

    dropZones.forEach(dropZone => {
        dropZone.addEventListener('dragover', event => {
            event.preventDefault();
        });

        dropZone.addEventListener('drop', event => {
            event.preventDefault();
            const imagenId = event.dataTransfer.getData('imagenId');
            const imagen = document.getElementById(imagenId);
            dropZone.innerHTML = ''; // Limpiar el contenido de la caja
            dropZone.appendChild(imagen);
        });
    });

    let imagenes = document.querySelectorAll('.cajaimagenes img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('dragstart', event => {
            event.dataTransfer.setData('imagenId', event.target.id);
        });
    });
});
function reinicio() {
    window.location.reload();
}

