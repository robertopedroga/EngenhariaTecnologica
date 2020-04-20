document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
    
    var getData=function() {
        var purchaseDataTable = window.localStorage.getItem("purchaseDataTable");

        if(!purchaseDataTable){
            var data = [['ID', 'Responsável', 'Descrição', 'Quantidade', 'Medida'], ['67868', 'Romério Vásquez', 'Perfil metálico tipo U 12 metros', '17', "Ton."]];
            window.localStorage.setItem("purchaseDataTable", JSON.stringify(data));
        } else {    
            var data = JSON.parse(window.localStorage.getItem("purchaseDataTable"));
        }

        return function() {
            for(var page=parseInt(window.location.hash.replace("#", ""), 10)||1, limit=10, row=(page-1)*limit, count=page*limit, part=[];
            row<count;
            row++)part.push(data[row]);
            return part
        }

    }
    ();
    container=document.getElementById("paginating"), paginating=new Handsontable(container, {
        data: getData(), colHeaders: !0
    }
    ), Handsontable.Dom.addEvent(window, "hashchange", function(event) {
        paginating.loadData(getData())
    }
    );
    }, 800);
}

),
function(window, document, $) {
    $(".pagination li:first-child").addClass("active"),
    $(".pagination li").on("click", function() {
        $(this).siblings("li").removeClass("active"), $(this).addClass("active")
    }
    )
}

(window, document, jQuery);