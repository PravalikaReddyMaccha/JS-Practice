let input = document.querySelector("#input");
let generatebttn = document.querySelector("#generate-bttn");

generatebttn.addEventListener('click', function() {
    let inputValue = input.value.trim();
    if (!inputValue) {
      alert("Please enter some text");
      return;
    }
    
    const container = document.querySelector("#qr-container");
    const ctx = container.getContext('2d');
    ctx.clearRect(0, 0, container.width, container.height);

    QRCode.toCanvas(container, inputValue, function (error) {
       if (error) console.error(error);
       else console.log('QR code generated!');
    });
    input.value = '';
});
