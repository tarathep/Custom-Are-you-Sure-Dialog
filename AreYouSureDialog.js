// initilized 
var checkDF;
//add id form into detected.
var idForm = ['#ManifestForm', '#VsedForm','form-vsed'];

$(function () {
    active();
});

function active() {
    for (var i = 0; i < idForm.length; i++) {
        $(idForm[i]).areYouSure({
            change: function () {
                checkDF = true;
            }
            , silent: true
        });
    }
}

//func to redirect to index page
function areYouSureDialog(controller, page) {
    active();
    //'/Manifest_Schedule/Index'
    var url = "/" + controller + "/" + page;
    if (checkDF) {
        $('<div style="padding:2;margin: 2;"></div>').appendTo('body')
            .html('<div><h6>Changes you made may not be saved.</h6></div>')
            .dialog({
                modal: true, title: 'Leave site!', zIndex: 10000, autoOpen: true,
                width: 'auto', resizable: false,
                buttons: {
                    Yes: function () {

                        location.href = url;
                        $(this).dialog("close");
                    },
                    No: function () {

                        $(this).dialog("close");
                    }
                },
                close: function (event, ui) {
                    $(this).remove();
                }
            });
    } else {
        location.href = url;
    }
}