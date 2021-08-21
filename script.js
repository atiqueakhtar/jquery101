$(".btn").click((e) => {
    $("h1").css("color", e.currentTarget.innerText);
})

$(document).keydown((e) => {
    console.log(e.key);
    $("h1").text(e.key);
})