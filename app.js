function clickButton(){
    fetch("http://localhost:5000/")
    .then(response => response.json())
    .then(data => {
    console.log(data);
    const element = document.getElementById("changeMe");
    element.textContent = data.message; // Output: {message: 'Hello from Flask!'}
  })
  .catch(error => {
    console.error('Error:', error);
  });
};