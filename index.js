function showImageDetails(jsonFile, imageName) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const imageDetails1 = document.getElementById('imageDetails1');
      const imageDetails2 = document.getElementById('imageDetails2');
      const imageDetails3 = document.getElementById('imageDetails3');
      const imageInfo = data[imageName];
      imageDetails1.innerHTML = `
        <p><strong>HTML가능</strong> ${imageInfo.title}
      `;
      imageDetails2.innerHTML = `
        ${imageInfo.description}
      `;
      imageDetails3.innerHTML = `
        ${imageInfo.author}
      `;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
