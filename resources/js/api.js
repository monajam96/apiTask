function myProducts(){
fetch('https://dummyjson.com/products')
  .then(response => {
    // 2. بررسی وضعیت پاسخ
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // 3. تبدیل پاسخ به JSON
  })
  .then(data => {
    // 4. پردازش داده‌ها
    const tableBody = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
    let data1 =data.products;
    data1.forEach(user => {
      const row = document.createElement('tr');
      
      const idCell = document.createElement('td');
      idCell.textContent = user.id;
      row.appendChild(idCell);
      
      const titleCell = document.createElement('td');
      titleCell.textContent = user.title;
      row.appendChild(titleCell);
      
      const brandCell = document.createElement('td');
      brandCell.textContent = user.brand;
      row.appendChild(brandCell);
      
      const priceCell = document.createElement('td');
      priceCell.textContent = user.price;
      row.appendChild(priceCell);

      const modalBtn = document.createElement('td');
      modalBtn.innerHTML=`<button type="submit" id="myBtn" class="btn btn-primary" onclick="btnFunc(${user.id})" data-bs-toggle="modal" data-bs-target="#myModal">Details</button>`;
      row.appendChild(modalBtn);


      tableBody.appendChild(row);
  });
  })
  .catch(error => {
    // 5. مدیریت خطاها
    console.error('There was a problem with the fetch operation:', error);
  });}

  myProducts();
  function btnFunc(itemId){
    fetch(`https://dummyjson.com/products/${itemId}`)
    .then(response => {
    // 2. بررسی وضعیت پاسخ
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // 3. تبدیل پاسخ به JSON
  })
  .then(data => {
    console.log(data);
    generateDetail(data);
  })
  .catch(error => {
    // 5. مدیریت خطاها
    console.error('There was a problem with the fetch operation:', error);
  });}

  function generateDetail(data){
    const modalcontent = document.getElementById('modal-body');
    modalcontent.textContent = `Brand is ${data.brand} and the price is ${data.price}`;
    
  };

 
  

