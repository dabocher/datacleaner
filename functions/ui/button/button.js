import { formatAndSaveData } from "../../fileFormatter/fileSaver/formattedFileSaver.js";

// Importar estilos para el mensaje de éxito
const successStyleLink = document.createElement("link");
successStyleLink.rel = "stylesheet";
successStyleLink.href = "./functions/ui/button/success-message.css";
document.head.appendChild(successStyleLink);

export const addFormatButton = (data) => {
  const fileInfo = window.fileInfo;
  const formatBtn = document.createElement("button");
  formatBtn.className = "upload-btn active";
  formatBtn.innerHTML =
    '<i class="fas fa-file-export"></i> Format & Descàrrega';
  formatBtn.onclick = () => {
    // Deshabilitar el botón después de hacer clic
    formatBtn.classList.add("disabled");
    formatBtn.style.pointerEvents = "none";

    // Formatear y descargar el archivo
    formatAndSaveData(data);

    // Mostrar mensaje de éxito después de un breve retraso para permitir que se complete la descarga
    setTimeout(() => {
      showSuccessMessage();
    }, 1000);
  };

  fileInfo.appendChild(formatBtn);
};

// Función para mostrar el mensaje de éxito
const showSuccessMessage = () => {
  // Crear una nueva card para el mensaje de éxito
  const successCard = document.createElement("div");
  successCard.className = "card success-card";
  successCard.innerHTML = `
    <div class="card-body success-message">
      <i class="fas fa-check-circle"></i> Fitxer formatejat i descarregat amb éxit
    </div>
  `;

  // Insertar la card después del elemento fileInfo
  const fileInfo = window.fileInfo;
  fileInfo.parentNode.insertBefore(successCard, fileInfo.nextSibling);
};
