$(function()
{
	$('.scroll-pane').jScrollPane();
    $('#ribbon a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
    $('#ribbon a[href="#month"]').tab('show') // Select tab by name
})

$("#left-side-split").click(function(e){
    e.preventDefault();
    $("#left-side").toggleClass("open");
	$('.scroll-pane').jScrollPane({
        reinitialise: true
        //autoReinitialiseDelay: true
    });
});
    
            var shiftType = $(this).data('NA')

    
    $(".shifts li").click(function(e){
        e.preventDefault();
        shiftType = $(this).data('shift')
        localStorage.setItem("shiftType",shiftType);
        $(".shifts li").removeClass("selected");
        $(this).addClass("selected")
    })   
    
    $("main table td").click(function(e){
        $(this).removeClass();
        $("div",this).removeClass();
        if ( shiftType != null ) {
        $("div",this).addClass("shift-"+shiftType);
        }
    })
  

$.typeahead({
    input: '.js-typeahead-country_v1',
    order: "desc",
    source: {
        data: [
            "Sheppy: community","Sheppy: ICU","Sheppy: day unit","Bath: Oncology","Croydon: Burns","Bristol: Oncology","Cambridge: Oncology","St Marks: gastro","St Marks: community"
        ]
    },
    callback: {
        onInit: function (node) {
            console.log('Typeahead Initiated on ' + node.selector);
        }
    }
});  

});

