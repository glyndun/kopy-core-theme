var customers = [], customer = null;
$("#customer option").each(function(){
	if (this.dataset.id) {
		customers.push(JSON.parse(this.dataset.customer));
	}
});

function formatState (state) {
  if (!state.id) {
    return state.text;
  }

  var $state = $(
    '<span class="d-flex flex-column"><span>'+state.text+'</span><span class="fs-13 text-muted">'+state.contact+'</span></span>'
  );
  return $state;
};

$("#customer").select2({
    data: {...{id: null, text: "Select customer"}, ...customers.map(item => {return {id: item.id, text: item.name, contact: item.phone}})},
    templateResult: formatState
});

function getFormErrors($form) {
	var errors = {};
	var data = $form.serializeArray();
	$.map(data, function(val, i) {
		if (!val.value) {
			errors[val.name] = "The "+val.name+" attribute is required";
		}
	});

	return $.isEmptyObject(errors) ? null : errors;
}

function addProducts(products) {
	var $productsTable = $("#order-items");
	for (let index = 0; index < products.length; index++) {
		const product = products[index];
		var id = "order-item-" +product.id;
		if (!$productsTable.find("tr#"+id).length) {
			var html = '<tr id="'+id+'">';

			html += '<td style="width: 80px;" class="ps-5">';
			html += '<div style="width: 46px; height: 46px;">';
			html += '<img src="'+product.image+'" alt="Product" style="width: 46px; height: 100%; border-radius: 0.25rem;"/>';
			html += '</div></td>';

			html += '<td class="ps-0">';
			html += '<div class="d-flex flex-column">';
			html += '<a href="/src/pages/ecommerce/product/show.html" class="text-dark fw-bold text-decoration-none">'+product.title+'</a>';
			html += '<span class="text-muted">'+product.sku+'</span>';
			html += '<span class="fw-bold">$34.94</span>';
			html += '</div></td>';

			html += '<td>';
			html += '<input type="number" class="form-control w-32r" value="1" name="quantity" data-id="'+product.id+'" />';
			html += '</td>';

			html += '<td class="text-end pe-5 fw-bold">$'+product.price+'</td>';

			html += '<td class="text-end pe-5 fw-bold">';
			html += '<button class="btn btn-sm btn-link px-2 text-danger removeOrderItem" type="button" data-id="'+product.id+'" data-tr-id="'+id+'">';
			html += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
			html += '</button></td></tr>';
			$productsTable.find("tbody").append(html);
		}
	}
}

$("#customer").on("change", function() {
	if (this.value) {
		customer = customers.find(item => item.id === parseInt(this.value));
		if (customer) {
			$(".customer-toolbar").removeClass("d-none");
			$("#customer_select").addClass("d-none");
			$(".customer-selected").removeClass("d-none");
			$(".customer-selected .customer-name").html(customer.name);
			$(".customer-selected .customer-email").html(customer.email);
			$(".customer-selected .customer-phone").html(customer.phone);
			$(".shipping-address").removeClass("d-none");
			$(".shipping-address .shipping-address-address-1").html(customer.shipping_address.address1);
			$(".shipping-address .shipping-address-address-2").html(customer.shipping_address.address2);
			$(".shipping-address .shipping-address-state").html(customer.shipping_address.post_code);
			$(".shipping-address .shipping-address-city").html(customer.shipping_address.city);
			$(".shipping-address .shipping-address-country").html(customer.shipping_address.country);
			$(".billing-address-con").removeClass("d-none");
			if (customer.billing_address) {
				$(".billing-address .billing-address-address-1").html(customer.billing_address.address1);
				$(".billing-address .billing-address-address-2").html(customer.billing_address.address2);
				$(".billing-address .billing-address-state").html(customer.billing_address.post_code);
				$(".billing-address .billing-address-city").html(customer.billing_address.city);
				$(".billing-address .billing-address-country").html(customer.billing_address.country);
			}
		}
	} else {
		customer = null;
		$(".customer-toolbar").addClass("d-none");
		$("#customer_select").removeClass("d-none");
		$(".customer-selected").addClass("d-none");
		$(".shipping-address").addClass("d-none");
		$(".billing-address-con").addClass("d-none");
	}
});

$("#show_shipping_address").on("change", function() {
	if (this.checked) {
		$(".billing-address").addClass("d-none");
		if (customer) {
			customer.billing_address = null;
		}
	} else {
		$(".billing-address").removeClass("d-none");
		if (customer) {
			customer.billing_address = customer.shipping_address;
			$(".billing-address").removeClass("d-none");
			$(".billing-address .billing-address-address-1").html(customer.billing_address.address1);
			$(".billing-address .billing-address-address-2").html(customer.billing_address.address2);
			$(".billing-address .billing-address-state").html(customer.billing_address.post_code);
			$(".billing-address .billing-address-city").html(customer.billing_address.city);
			$(".billing-address .billing-address-country").html(customer.billing_address.country);
		}
	}
});

$("#save_customer_btn").on("click", function() {
    var $this = $(this);
	var $form = $("#formCreateCustomer");
    $this.attr("disabled", true).addClass("btn-loading");
    setTimeout(function() {
        $this.attr("disabled", false).removeClass("btn-loading");
		var errors = getFormErrors($form);
		if (errors) {
			formError($form, errors);
		} else {
			$('#createCustomer').modal("hide");
			$("#customer").val(1).trigger("change");
		}
    }, 3000);
});

$("#show_shipping_address").prop("checked", true).trigger("change");

$("#remove_customer").on("click", function() {
	$("#customer").val("").trigger("change");
});

$("#add_products_btn").on("click", function() {
	var products = $('[name="product_selection"]:checked').map(function() {
		return {
			id: this.dataset.id,
			title: this.dataset.productTitle,
			image: this.dataset.productImage,
			price: this.dataset.productPrice,
			sku: this.dataset.productSku,
		};
	}).get();

	if (products.length) {
		$("#browseProducts").modal("hide");
		addProducts(products);
	}
});

$(document).delegate(".removeOrderItem", "click", function() {
	$("#order-items").find("tr#"+this.dataset.trId).remove();
});
