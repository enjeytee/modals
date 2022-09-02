const openBtn = document.getElementById("open-modal")
const closeBtn = document.getElementById("close-modal")

openBtn.addEventListener
(
    "click", 
    function()
    {
        let show = document.getElementById("overlay")
        show.style.display = "block"
    }
)

closeBtn.addEventListener
(
    "click", 
    function()
    {
        let show = document.getElementById("overlay")
        show.style.display = "none"
    }
)