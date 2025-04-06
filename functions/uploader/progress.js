import { addFormatButton } from "../ui/button/button.js";
import { enableDragDrop } from "./dragAndDropper.js";
import { enableNavigationButtons } from "./fileProcesser.js";

export const updateProgress = (processed, total) => {
  const fileInfo = window.fileInfo;
  const percentage = Math.round((processed / total) * 100);

  fileInfo.innerHTML = `
    <p><strong>Processant:</strong> ${percentage}% completat</p>
    <div class="progress-bar">
      <div class="progress" style="width: ${percentage}%"></div>
    </div>
  `;
};

export const completeProcessing = (data) => {
  const fileInfo = window.fileInfo;
  fileInfo.innerHTML = `
    <p><strong>Processament completat!</strong></p>
    <p>${data.length - 1} files carregades</p>
  `;

  // Add format button if needed
  if (data.length > 1) {
    addFormatButton(data);
  }

  // No volvemos a habilitar el drag & drop ni los botones de navegación
  // para mantener oculta la tarjeta de "Navega pels Arxius"
  // enableDragDrop();
  // enableNavigationButtons();
};
