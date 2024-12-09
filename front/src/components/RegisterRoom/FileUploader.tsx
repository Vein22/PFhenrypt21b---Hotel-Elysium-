import React, { useState } from "react";

interface FileUploaderProps {
  onFileUpload: (fileUrl: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Aquí está la función handleFileChange
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    try {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "unsigned_preset"); // Cambiar a tu upload_preset
      formData.append("cloud_name", "dkcaaane6");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dkcaaane6/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const responseBody = await response.text();
        console.error("Error del servidor:", responseBody);
        throw new Error("Error al subir la imagen a Cloudinary");
      }

      const data = await response.json();
      const uploadedUrl = data.secure_url;

      onFileUpload(uploadedUrl);
    } catch (error) {
      console.error("Error capturado:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-gray-500 h-1/3 flex flex-col justify-center items-center gap-4">
      {previewUrl ? (
        <img src={previewUrl} alt="Preview" className="w-48 h-48 object-cover rounded" />
      ) : (
        <p className="text-gray-200">Selecciona una imagen para verla aquí</p>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default FileUploader;

