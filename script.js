// завдання 1

$(".head").css("backgroundColor", "green").find(".inner").css("font-size", "35px");

// завдання 2

$(() => {
    $("a[href^='https://']").attr("target", "_blank");
});

// завдання 3

let h3 = $("h3");
    
h3.each(function() {
    let div = $(this).next("div");
    div.insertBefore($(this));
});

// завдання 4

let checkbox =  $("[type='checkbox']");

let counter = 0;

checkbox.on("change", function() {
    if ($(this).is(":checked")) {
        counter++;
        if (counter === 3) {
          checkbox.attr("disabled", true);
        };
    };
});