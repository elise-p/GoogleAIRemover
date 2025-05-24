// get the DOM
// Try to find for h1 element if AI Overview exist
const observer = new MutationObserver(() => {
    var h1s = document.getElementsByTagName("h1")
    for (var i = 0; i < h1s.length; i++) {
        if (h1s[i].innerText == "AI Overview") {
            removeAIOverview(h1s[i])
        }
    }
})

function removeAIOverview(heading) {
    const remove = heading.parentNode.parentNode
    remove.remove()
}

observer.observe(document.body, {childList: true, subtree: true})