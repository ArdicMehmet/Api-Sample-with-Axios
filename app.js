import getData from "./module.js";

(async () => {
    let data = await getData(3);
    console.log(data);
})();
