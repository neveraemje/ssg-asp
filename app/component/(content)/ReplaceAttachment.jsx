// export const ReplaceAttachment = (text, id) => {
//   const localImagePath = `/images/${id}`;

//   // Handle image attachments
//   text = text.replace(/<img\s+[^>]*src=("[^"]+"|'[^']+'|[^"'>]+)[^>]*>/g, (match, src) => {
//     const srcValue = src.replace(/['"]+/g, ""); // Remove surrounding quotes
//     const imageFileName = srcValue.substring(srcValue.lastIndexOf('/') + 1); // Extract the file name

//     // Define the local image path based on the file name and 'id'
//     const localImageSrc = `${localImagePath}/${imageFileName}`;

//      // Define different sizes for the srcset attribute (add more sizes as needed)
//      const sizes = "100w, 200w, 400w";

//      // Construct the srcset attribute with multiple image sources
//      const srcset = `${localImageSrc} 100w,
//                      ${localImageSrc.replace(/\.(\w+)$/, '@2x.$1')} 200w,
//                      ${localImageSrc.replace(/\.(\w+)$/, '@4x.$1')} 400w`;

//      return `<img src="${localImageSrc}" srcset="${srcset}" sizes="${sizes}" alt="${imageFileName}" loading="lazy" />`;
//   });

//   // Handle video attachments
//   text = text.replace(/<a\s+[^>]*href=("([^"]+\/download\/attachments\/[^"]+)")[^>]*>(.*?)<\/a>/g, (match, videoLink, videoSrc, text) => {
//     const videoFileName = videoSrc.split('/').pop(); // Extract the video file name

//     // Define the local video path based on the file name and 'id'
//     const localVideoSrc = `${localImagePath}/${videoFileName}`;

//     return `<video controls src="${localVideoSrc}"  style="width: 100%;">${text}</video>`;
//   });

//   return text;
// };

import { getStorage } from 'firebase/storage';
import app from '@/lib/firebase/firebaseConfig';

const storage = getStorage(app);

export const ReplaceAttachment = (text, id) => {
  const localImagePath = `images/${id}`;

  // Handle image attachments
  text = text.replace(/<img\s+[^>]*src=("[^"]+"|'[^']+'|[^"'>]+)[^>]*>/g, (match, src) => {
    const srcValue = src.replace(/['"]+/g, ""); // Remove surrounding quotes

    // Return the original image tag if srcValue is undefined or not a local path
    if (!srcValue || !srcValue.startsWith('https://go-jek.atlassian.net')) {
      return match;
    }

    try {
      // Remove any query parameters from the src
      const srcWithoutParams = srcValue.split('?')[0];
      // Extract the file name from the src
      const fileName = srcWithoutParams.substring(srcWithoutParams.lastIndexOf('/') + 1);

      // Construct the Firebase Storage URL with proper encoding
      const encodedLocalImagePath = encodeURIComponent(localImagePath).replace(/\//g, '%2F');
      const encodedFileName = encodeURIComponent(fileName);
      const firebaseStorageURL = `https://firebasestorage.googleapis.com/v0/b/asphalt-storage.appspot.com/o/${encodedLocalImagePath}%2F${encodedFileName}?alt=media`;

      // Return the image tag with the Firebase Storage URL
      return `<img src="${firebaseStorageURL}" alt="${fileName}" loading="lazy" />`;
    } catch (error) {
      console.error('Error replacing image:', error);
      return match; // Return the original image tag if replacement fails
    }
  });

  // Handle video attachments
  // text = text.replace(/<a\s+[^>]*href=("([^"]+\/download\/attachments\/[^"]+)")[^>]*>(.*?)<\/a>/g, (match, videoLink, videoSrc, text) => {
  //   const videoFileName = videoSrc.split('/').pop(); // Extract the video file name

  //   // Define the local video path based on the file name and 'id'
  //   const localVideoSrc = `${localImagePath}/${videoFileName}`;

  //   return `<video controls src="${localVideoSrc}"  style="width: 100%;">${text}</video>`;
  // });
 
  // Handle video attachments
  // Handle video attachments
text = text.replace(/<a\s+[^>]*href=("([^"]+\/download\/attachments\/[^"]+)")[^>]*>(.*?)<\/a>/g, (match, videoLink, videoSrc, text) => {
  try {
    // Extract the video file name from the URL
    const urlWithoutParams = videoSrc.split('?')[0]; // Remove any query parameters
    const videoFileName = decodeURIComponent(urlWithoutParams.split('/').pop()); // Extract and decode the filename

    // Construct the Firebase Storage URL for the video
    const encodedLocalImagePath = encodeURIComponent(localImagePath).replace(/\//g, '%2F');
    const encodedFileName = encodeURIComponent(videoFileName);
    const firebaseStorageURL = `https://firebasestorage.googleapis.com/v0/b/asphalt-storage.appspot.com/o/${encodedLocalImagePath}%2F${encodedFileName}?alt=media`;

    // Return the video tag with the Firebase Storage URL
    return `<video controls src="${firebaseStorageURL}" style="width: 100%;">${text}</video>`;
  } catch (error) {
    console.error('Error replacing video:', error);
    return match; // Return the original video tag if replacement fails
  }
});



  return text;
};



// import { getStorage, ref, getDownloadURL } from 'firebase/storage';
// import app from '@/lib/firebase/firebaseConfig';

// const storage = getStorage(app);

// export const ReplaceAttachment = (text, id) => {
//   const localImagePath = `images/${id}`;

//   // Handle image attachments
//   text = text.replace(/<img\s+[^>]*src=("[^"]+"|'[^']+'|[^"'>]+)[^>]*>/g, (match, src) => {
//     const srcValue = src.replace(/['"]+/g, ""); // Remove surrounding quotes

//     // Return the original image tag if srcValue is undefined or not a local path
//     if (!srcValue || !srcValue.startsWith('https://go-jek.atlassian.net')) {
//       return match;
//     }

//     try {
//       // Remove any query parameters from the src
//       const srcWithoutParams = srcValue.split('?')[0];

//       // Extract the file name from the src
//       const fileName = srcWithoutParams.substring(srcWithoutParams.lastIndexOf('/') + 1);

//       // Construct the Firebase Storage URL with proper encoding
//       // const encodedLocalImagePath = encodeURIComponent(localImagePath).replace(/%2F/g, '/'); // Replace %2F with /
//       const encodedLocalImagePath = encodeURIComponent(localImagePath).replace(/\//g, '%2F');

//       const encodedFileName = encodeURIComponent(fileName);
//       const firebaseStorageURL = `https://firebasestorage.googleapis.com/v0/b/asphalt-storage.appspot.com/o/${encodedLocalImagePath}%2F${encodedFileName}?alt=media`;

//       // Return the image tag with the Firebase Storage URL
//       return `<img src="${firebaseStorageURL}" alt="${fileName}" loading="lazy" />`;
//     } catch (error) {
//       console.error('Error replacing image:', error);
//       return match; // Return the original image tag if replacement fails
//     }
//   });


//   // Handle image attachments
//   text = text.replace(/<img\s+[^>]*src=("[^"]+"|'[^']+'|[^"'>]+)[^>]*>/g, (match, src) => {
//     const srcValue = src.replace(/['"]+/g, ""); // Remove surrounding quotes

//     // Return the original image tag if srcValue is undefined or not a local path
//     if (!srcValue || !srcValue.startsWith('https://go-jek.atlassian.net')) {
//       return match;
//     }

//     try {
//       // Remove any query parameters from the src
//       const srcWithoutParams = srcValue.split('?')[0];

//       // Extract the file name from the src
//       const fileName = srcWithoutParams.substring(srcWithoutParams.lastIndexOf('/') + 1);

//       // Construct the Firebase Storage URL with proper encoding
//       // const encodedLocalImagePath = encodeURIComponent(localImagePath).replace(/%2F/g, '/'); // Replace %2F with /
//       const encodedLocalImagePath = encodeURIComponent(localImagePath).replace(/\//g, '%2F');

//       const encodedFileName = encodeURIComponent(fileName);
//       const firebaseStorageURL = `https://firebasestorage.googleapis.com/v0/b/asphalt-storage.appspot.com/o/${encodedLocalImagePath}%2F${encodedFileName}?alt=media`;

//       // Return the image tag with the Firebase Storage URL
//       return `<img src="${firebaseStorageURL}" alt="${fileName}" loading="lazy" />`;
//     } catch (error) {
//       console.error('Error replacing image:', error);
//       return match; // Return the original image tag if replacement fails
//     }
//   });

//   return text;
// };



// https://firebasestorage.googleapis.com/v0/b/asphalt-storage.appspot.com/o/images%2F2848720057%2FFloating%20Regular%20-with%20icon-%20Tap.mp4?alt=media
// https://firebasestorage.googleapis.com/v0/b/asphalt-storage.appspot.com/o/images%2F2848720057%2FFloating%2520Regular%2520-with%2520icon-%2520Tap.mp4?alt=media

//https://firebasestorage.googleapis.com/v0/b/asphalt-storage.appspot.com/o/images%2F2848720057%2FFloating%20Regular%20-with%20icon-%20Tap.mp4?alt=media&token=24eda0b9-79e6-4ca5-a528-3e8cd59dd41e