import { formatFileSize } from "../fileFormatter/formatFileSize.js";

export const updateFileInfoLoading = (file) => {
  const fileInfo = window.fileInfo;
  fileInfo.innerHTML = `
    <p><strong>${file.name}</strong> (${formatFileSize(file.size)})</p>
    <div class="loading">
      <div class="spinner"></div>
      <p>Processant arxiu...</p>
    </div>
  `;
  fileInfo.classList.add("active");
};
