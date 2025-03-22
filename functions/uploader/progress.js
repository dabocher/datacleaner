import { addFormatButton } from "../ui/button/button.js";

export const updateProgress = (processed, total) => {
  const fileInfo = window.fileInfo;
  const percentage = Math.round((processed / total) * 100);

  fileInfo.innerHTML = `
    <p><strong>Processing:</strong> ${percentage}% complete</p>
    <div class="progress-bar">
      <div class="progress" style="width: ${percentage}%"></div>
    </div>
  `;
};

export const completeProcessing = (data) => {
  const fileInfo = window.fileInfo;
  fileInfo.innerHTML = `
    <p><strong>Processing complete!</strong></p>
    <p>${data.length - 1} rows loaded</p>
  `;

  // Add format button if needed
  if (data.length > 1) {
    addFormatButton(data);
  }
};
