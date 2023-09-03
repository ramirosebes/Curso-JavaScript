//-------------------- Librerias ----------

//---------- Sweetalert2 ----------
// https://sweetalert2.github.io/#usage

const sweetAlert = document.querySelector("#sweetAlert");

sweetAlert.addEventListener('click', function() {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'question', //warning, error, success, info, question
        confirmButtonText: 'Confirm',
        showCancelButton: 'true',
        cancelButtonText: 'Cancel',
        iconColor: 'grey', //#000
        // iconHtml: '<i class="bi bi-browser-chrome"></i>'
        //Leer documentacion "Recipe Gallery"
    }).then((result) => {
        if(result.isConfirmed) {
            Swal.fire({
                title: "Confirmed!",
                confirmButtonText: 'Ok'
            });
            // alert("Confirmed!")
        } else {
            Swal.fire({
                title: "Canceled!",
                confirmButtonText: 'Ok'
            });
            // alert("Canceled!")
        }
    })
});

//---------- Toastify ----------
// https://apvarun.github.io/toastify-js/

const toastify = document.querySelector('#toastify');

toastify.addEventListener('click', () => {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
});

//---------- Luxon ----------
// https://moment.github.io/luxon/#/

const DateTime = luxon.DateTime;

// const now = DateTime.now().toString();
const now = DateTime.now()
// console.log(now.year);
// console.log(now);
// console.log(now.toLocaleString(DateTime.DATETIME_MED));
console.log(now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS));