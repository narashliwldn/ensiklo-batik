$(document).ready(function(){
  $('.sidenav').sidenav({});
  $('.parallax').parallax();
  // $('.pagination').pagination({
  //     dataSource: 'http://batikita.herokuapp.com/index.php/batik/all',
  //     locator: 'hasil',
  //     totalNumber: 75,
  //     pageSize: 5,
  //     ajax: {
  //         beforeSend: function() {
  //             dataContainer.html('Loading data ... ');
  //         }
  //     },
  //     callback: function(data, pagination) {
  //         // template method of yourself
  //         var html = template(data);
  //         dataContainer.html(html);
  //     }
  //   });
});

// M.AutoInit();
//
// document.addEventListener('DOMContentLoaded', function() {
//   const elems = document.querySelectorAll('.sidenav');
//   const instances = M.Sidenav.init(elems /*, options*/);
// });
//
// document.addEventListener('DOMContentLoaded', function() {
//    const elems = document.querySelectorAll('.parallax');
//    const instances = M.Parallax.init(elems /*, options*/);
//  });
