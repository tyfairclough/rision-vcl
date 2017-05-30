$(function()
{
    
  $('[data-toggle="popover"]').popover()
    
    
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
    $('#overlay').fadeOut(300, function(){
        $('.expose').css('z-index','1');
    });        
    })   
    
    $("main table td").click(function(e){
        $('#shift').popover('destroy');
        $(this).removeClass();
        $("div",this).removeClass();        
        if ( shiftType === "clearShift") {
            console.log("clearshift");            
        } else if  ( shiftType != null ) {
            $("div",this).addClass("shift-"+shiftType);
        } else {
            $('#shift').popover('show');
                $(".expose").css('z-index','99999');
                $('#overlay').fadeIn(300);
            //alert("pick a shift type first");
        }
    });
    
    
    
    
$("table").click(function(e){
    e.preventDefault();
      activeTab('shift');
});
    
    function activeTab(tab) {
              $('.nav-tabs a[href="#' + tab + '"]').tab('show');
    }
  
    var fullmonth_array = ["Jan","Feb","March","April","May","June","July","August","September","October","November","December"];
    
    
$("#datepicker").datepicker( {
    format: "mm MM",
    viewMode: "months", 
    minViewMode: "months",
    monthNamesShort: fullmonth_array
});    


$("td").hover(function(){
    $("ul.staff li").removeClass();
    var row = $(this).parent().index('tr') - 1;
    $("ul.staff li").eq(row).addClass("selected");
})  

    

    

    /*
    $("table td").on(
        mouseenter: function() {
            var row = $(this).parent().index('tr') - 1;
            $("ul.staff li").eq(row).addClass("selected");
            console.log('enter');
        },
        mouseleave: function() {
            $("ul.staff li").removeClass();
            console.log('bye!');
        }    
    );  
    */
    
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

