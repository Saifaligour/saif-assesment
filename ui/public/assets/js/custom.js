
// Main Menu Trigger
$(document).ready((function(){setTimeout((function(){$.app.menu.collapse()}),100)}));





// *** Add Remove Fuction for Default Layout Design in Manage Design - Designer
// add row DLD
$("#addRowDLD").click(function () {
    var html = '';
    html += '<div id="inputFormRowDLD" class="pb-4">';
    html += '<div class="add-remove-row d-flex">';
    html += '<div class="flex-grow-1">';
    html += '<div class="canvas-section-row">';
    html += '<label>Floor Number';
    html += '<span class="req-field">*</span> ';
    html += '<i class="icon-info icons" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Some Info About This" aria-label="Some Info About This"></i>';
    html += '</label>';
    html += '<select class="form-select ">';
    html += '<option value="none">Select</option>';
    html += '<option value="1">1</option>';
    html += '<option value="2">2</option>';
    html += '<option value="3">3</option>';
    html += '</select>';
    html += '</div>';

    html += '<div class="canvas-section-row">';
    html += '<label>Floor Carpet Area (SFT) <span class="req-field">*</span></label>';
    html += '<input type="text" class="form-control" id="" placeholder="">';
    html += '</div>';

    html += '<div class="canvas-section-row">';
    html += '<label>Default Seats <span class="req-field">*</span></label>';
    html += '<select class="form-select ">';
    html += '<option value="none">Select</option>';
    html += '<option value="1">Opt 1</option>';
    html += '<option value="2">Opt 2</option>';
    html += '<option value="3">Opt 3</option>';
    html += '</select>';
    html += '</div>';
    html += '</div>';
    html += '<div class="align-self-end"><a id="removeRowDLD" role="button" class="add-rem-link text-blue">Remove</a></div>';
    html += '</div>';
    html += '</div>';

    $('#newRowDLD').append(html);
});

// remove row DLD
$(document).on('click', '#removeRowDLD', function () {
    $(this).closest('#inputFormRowDLD').remove();
});



// *** Add Remove Fuction for Default Details in Manage Design - Designer
// add row DD
$("#addRowDD").click(function () {
    var html = '';
    html += '<div id="inputFormRowDD" class="pb-4">';
    html += '<div class="add-remove-row d-flex">';
    html += '<div class="flex-grow-1">';

    html += '<div class="row">';
    html += '<div class="col-lg-6">';
    html += '<div class="canvas-section-row">';
    html += '<label>Design Name <span class="req-field">*</span></label>';
    html += '<input type="text" class="form-control" id="" placeholder="">';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-lg-6">';
    html += '<div class="canvas-section-row">';
    html += '<label>Design Layout <span class="req-field">*</span></label>';
    html += '<div class="upload-btn-wrapper">';
    html += '<button class="uploadbar"><i class="fa fa-upload" aria-hidden="true"></i></button>';
    html += '<input type="file" name="myfile">';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    html += '</div>';
    html += '<div class="align-self-end"><a id="removeRowDD" role="button" class="add-rem-link text-blue">Remove</a></div>';
    html += '</div>';
    html += '</div>';

    $('#newRowDD').append(html);
});

// remove row DD
$(document).on('click', '#removeRowDD', function () {
    $(this).closest('#inputFormRowDD').remove();
});




// Bootstrap Popover Trigger
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Bootstrap Tooltip Trigger
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

	


