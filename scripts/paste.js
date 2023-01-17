{
    const textArea = document.createElement("textarea");
    textArea.style.position = "absolute";
    textArea.style.left = "-100%";
    document.body.insertAdjacentElement("afterbegin", textArea);
    textArea.focus();
    document.execCommand("paste");
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("bojScript.js?") + new URLSearchParams({ problemList: textArea.value });
    document.body.append(script);
    textArea.remove();
    script.remove();
}