import { processFile } from "./fileProcesser.js";

export const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add("highlight");
};

export const handleDragLeave = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("highlight");
};

export const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("highlight");

  const files = e.dataTransfer.files;
  if (files.length) {
    processFile(files[0]);
  }
};
export const handleFileSelect = (e) => {
  const file = e.target.files[0];
  if (file) {
    processFile(file);
  }
};
