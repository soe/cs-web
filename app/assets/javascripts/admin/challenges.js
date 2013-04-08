function nextTab(elem) {
  $(elem + ' li.active')
    .next()
    .find('a[data-toggle="tab"]')
    .click();

  $('html, body').animate({
    scrollTop: $(elem).offset().top - 40
  }, 200);
}

function prevTab(elem) {
  $(elem + ' li.active')
    .prev()
    .find('a[data-toggle="tab"]')
    .click();
  $('html, body').animate({
    scrollTop: $(elem).offset().top - 40
  }, 200);
}
  
$(function() {

  // Add new prize sets
  $('.add-new-prize-set').live('click', function(e) {
    $('#prize-set tbody').append('\
      <tr> \
        <td><input type="text" name="admin_challenge[prizes][][place]" /></td> \
        <td><input type="text" name="admin_challenge[prizes][][prize]" /></td> \
        <td><input type="text" name="admin_challenge[prizes][][points]" /></td> \
        <td><input type="text" name="admin_challenge[prizes][][value]" /></td> \
        <td><a class="btn btn-danger delete-prize-set"><span>Delete This Prize Set</span></a></td> \
      </tr>')

    $('#prize-set tbody > tr').jqTransform()

    e.preventDefault()
  })

  // Delete prize sets
  $('.delete-prize-set').live('click', function(e) {
    $(this).parents('tr').fadeOut().empty()
    e.preventDefault()
  })

  // Add/Remove assets
  $('a.delete-asset').on('click', function(e) {
    filename = $(this).data('filename')

    // remove the asset from the hidden field
    $('#admin_challenge_assets').val(function(i, v) {
      var arr = v.split(',')
      for (var i in arr) {
        if (arr[i] == filename) {
          arr.splice(i, 1)
          break
        }
      }
      return arr.join(',')
    })

    $(this).parent().fadeOut()
    e.preventDefault()
  })

  // onBlur thingie for prizes
  //$('input.prize-prize').live('blur', function(e) {
    //value = this.value.replace(/[$,]/g,"")
    //if (isNaN(value) == false) {
      //$great_grand_parent = $(this).parent().parent().parent()
      //$great_grand_parent.find('input.prize-points').val(value)
      //$great_grand_parent.find('input.prize-value').val(value)
    //}

    // value
  //})

})
