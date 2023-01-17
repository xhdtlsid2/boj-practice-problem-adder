{
    const el = document.getElementById("problem-set-comma-separated-list");
    if(el){
        const textArea = document.createElement("textarea");
        textArea.textContent = el.textContent;
        textArea.style.position = "absolute";
        textArea.style.left = "-100%";
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
    }
}