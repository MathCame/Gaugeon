window.dataLayer = window.dataLayer || [];

const title = document.querySelector("h1");

title.addEventListener("click", function () {
    window.dataLayer.push({
        event: "title_click"
    });

    console.log("Title clicked");
});

title.addEventListener("dblclick", function () {
    console.log("There's nothing here.");
});
