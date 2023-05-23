export const scroll = function(id: string){
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
