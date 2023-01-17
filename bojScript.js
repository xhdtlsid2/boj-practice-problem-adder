{
    const params = new URLSearchParams(document.currentScript.src.split("?")[1]);
    const problemList = params.get("problemList").split(",");
    for(problem of problemList){
        problem_add(problem, 1);
    }
}