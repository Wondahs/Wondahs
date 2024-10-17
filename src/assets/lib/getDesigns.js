// Retrieve Designs
export async function getDesigns() {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const folderId = import.meta.env.VITE_FOLDER_ID;
  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`
  );
  const data = await response.json();
  return data.files; // This contains the list of files
}

export const getImgUrl = (imageId) => {
  const proxyUrl = "https://proxy.cors.sh/";
  const targetUrl = `https://drive.google.com/uc?id=${imageId}`;
  let imgUrl;

  fetch(proxyUrl + targetUrl)
    .then((response) => response.blob())
    .then((imageBlob) => {
      // Create a URL for the image and display it
      imgUrl = URL.createObjectURL(imageBlob);
    });
  return imgUrl;
};
