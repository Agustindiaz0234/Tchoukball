import { useState } from "react";

function ImageUploader({ onImageSelected }) {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      onImageSelected(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      )}
    </div>
  );
}

export default ImageUploader;
