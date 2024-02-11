const deleteBtn = document.getElementById("delete-btn");
const editBtn = document.getElementById("edit-btn");

const deleteProduct = (id) => {
  fetch(`/api/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

deleteBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("clicked");
  const productId = e.target.dataset.id;
  console.log(e.target);
  console.log(e.target.dataset);
  console.log(productId);
  deleteProduct(productId);
  location.reload();
});

$(".save").hide();

// EDIT FUNCTION
$(document).on("click", ".edit", function () {
  $(this).parent().siblings("td.data").each(function () {
      var content = $(this).html();
      // console.log(content);
      $(this).html('<input value="' + content + '" />');
      // console.log(this);
    });

  $(this).siblings(".save").show();
  $(this).siblings("#delete-btn").hide();
  $(this).hide();
});

const updateProduct = (id, data) => {
  fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

$(document).on("click", ".save", function () {
  $("input").each(function () {
    var content = $(this).val();
    $(this).html(content);
    $(this).contents().unwrap();
  });
  $(this).siblings(".edit").show();
  $(this).siblings("#delete-btn").show();
  $(this).hide();

  const productId = $(this).parent().siblings(".id").html();
  console.log(productId);

const product_name = $(this).parent().siblings(".name").html();
const product_weight = $(this).parent().siblings(".weight").html();
const product_size = $(this).parent().siblings(".size").html();
const product_price = $(this).parent().siblings(".price").html();
const product_quantity = $(this).parent().siblings(".quantity").html();

  const updatedProduct = {
    name: product_name,
    weight: product_weight,
    size: product_size,
    price: product_price,
    quantity: product_quantity,
  };

  console.log(updatedProduct);

updateProduct(productId, updatedProduct);
});