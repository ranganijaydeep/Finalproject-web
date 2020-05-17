function fetchData() {
    const recipe_url = 'http://localhost:5000/recipe';
    fetch(recipe_url).then(response => {
        console.log(response);
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    }).then(data => {
        console.log(data);
        const ejsformat = data.map(items => {
            return `$ { items.title }`;
            document.querySelector("#myRes").innerHTML("afterbegin".ejsformat);
        })
    }).catch(error => {
        console.log(error);

    });



}
fetchData();