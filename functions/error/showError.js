export const showError = (message) => {
  const fileInfo = window.fileInfo;
  fileInfo.innerHTML = `
    <p class="error-message">
      <i class="fas fa-exclamation-circle"></i>
      ${message}
    </p>
  `;
  fileInfo.classList.add("active");
};
