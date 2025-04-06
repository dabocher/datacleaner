import { formatAndSaveData } from "../../fileFormatter/fileSaver/formattedFileSaver.js";

export const addFormatButton = (data) => {
  const fileInfo = window.fileInfo;
  const formatBtn = document.createElement("button");
  formatBtn.className = "upload-btn active";
  formatBtn.innerHTML =
    '<i class="fas fa-file-export"></i> Format & Descàrrega';
  formatBtn.onclick = () => formatAndSaveData(data);

  fileInfo.appendChild(formatBtn);
};
