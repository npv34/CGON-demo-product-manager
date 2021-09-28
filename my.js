let products = [
    ["Iphone 13", 20000000, "Apple"],
    ["Iphone 8", 7000000, "Apple"],
    ["Sam sung note 10", 18000000, "Sam sung"],
];

function showListProduct() {
    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += '<tr>';
        html += '<td>';
        html += i + 1;
        html += '</td>';
        for (let j = 0; j < products[0].length; j++) {
            html += '<td>';
            html += products[i][j];
            html += '</td>';
        }

        html += '<td>';
        html += '<button onclick="deleteProduct(' + i + ')" class="btn-delete">Delete</button>';
        html += '<button onclick="updateProduct(' + i + ')" class="btn-update">Update</button>';
        html += '</td>';
        html += '</tr>';

    }
    document.getElementById('list-product').innerHTML = html;

}

showListProduct();

function deleteProduct(index) {
    if (confirm('Ban chac chan muon xoa khong?')) {
        // xoa phan tu trong mang dua vao index


        //goi lai ham showListProduct();


    }
}

function addProduct() {
    // lay dc gia  tri tu cac input
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let auth = document.getElementById('auth').value;

    //kiem tra du lieu dau vao


    // them vao mang
    let product = [name, price, auth];
    products.push(product);

    //goi lai ham showListProduct();
    showListProduct();

    //clear lai cac o input
    clearInput();


}

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('auth').value = '';
}

function updateProduct(index) {
    // lay phan tu  can update
    let productUpdate = products[index];
    // hien thi len form update
    document.getElementById('name').value = productUpdate[0];
    document.getElementById('price').value = productUpdate[1];
    document.getElementById('auth').value = productUpdate[2];

    // document.getElementById('idProduct').value = index;
    // show nut update
    document.getElementById('btn-update').hidden = false;
    //an nut add
    document.getElementById('btn-add').hidden = true;

    document.getElementById('btn-update').setAttribute('data-id', index);

}

function editProduct() {
    // lay dc gia  tri tu cac input
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let auth = document.getElementById('auth').value;
    let index = document.getElementById('btn-update').getAttribute('data-id')

    // them vao mang
    let product = [name, price, auth];
    products[index] = product;

    //goi lai ham showListProduct();
    showListProduct();

    //clear lai cac o input
    clearInput();

    document.getElementById('btn-update').hidden = true;
    document.getElementById('btn-add').hidden = false;

}