$(document).ready(function () {
    var $ta = $("#ta");
    var $startIndex = $("#startIndex"),
        $endIndex = $("#endIndex");

    function reportSelection() {
        var sel = $ta.getSelection();
        $startIndex.text(sel.start);
        $endIndex.text(sel.end);
    }

    $(document).on("selectionchange", reportSelection);
    $ta.on("keyup input mouseup textInput", reportSelection);

    $ta.focus();

    reportSelection();

    $("input").mousedown(function (e) {
        e.preventDefault();

        switch (this.name) {
            case "replaceSelectedTextAndCollapse":
                $ta.replaceSelectedText("**Test**", "collapseToEnd");
                break;
            case "replaceSelectedTextAndSelect":
                $ta.replaceSelectedText("**Test**", "select");
                break;
            case "deleteText":
                $ta.deleteText(+$('#ta_start').val(), +$('#ta_end').val());
                break;
            case "deleteSelectedText":
                $ta.deleteSelectedText();
                break;
            case "extractSelectedText":
                alert($ta.extractSelectedText());
                break;
            case "showSelectedText":
                alert($ta.showSelectedText());
                break;
            case "surroundSelectedText":
                $ta.surroundSelectedText("[Before]", "[After]");
                break;
            case "collapseToStart":
                $ta.collapseSelection(true);
                break;
            case "collapseToEnd":
                $ta.collapseSelection(false);
                break;
            case "setSelection":
                $ta.setSelection(+$('#ta_start').val(), +$('#ta_end').val());
                break;
        }
        $ta.focus();

        // For IE, which always shifts the focus onto the button
        window.setTimeout(function () {
            $ta.focus();
        }, 0);
    });
});

$.fn.enlargeTextArea = function () {
    return this.each(function () {
        var el = $(this);
        var elH = el.outerHeight();
        el.css({
            overflow: "hidden"
        });

        function manageTextarea() {
            el.css({
                height: elH,
                overflow: "hidden"
            });
            var nH = el.get(0).scrollHeight;
            nH = nH > elH ? nH : elH;
            el.css({
                height: nH,
                overflow: "hidden"
            })
        }

        el.bind("keydown", function () {
            manageTextarea(this);
        }).trigger("keydown");

    })
};

$(function () {
    $("textarea").not("#not").enlargeTextArea()
})
