// make searching url and create&select a tab
function libreSearch(info, tab) {
    var url = "https://librewiki.net/index.php?title=특수%3A검색&search=" + info.selectionText + "&go=보기";
    chrome.tabs.create({"url": url, "selected": true});
}

// add a context menu on right-click menus
chrome.contextMenus.create({"title": "리브레 위키에서 \"%s\" 검색",
                            "contexts": ["selection"],
                            "onclick": libreSearch
});
