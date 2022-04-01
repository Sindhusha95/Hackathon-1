document.body.innerHTML =`<div class="pageTitle">
<h1>Open Breweries DB</h1>
<image id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJRvLbKpFn_Y04Wxk19C8oquIUCuv8U8qoA&usqp=CAU" 
width="200px" height="150px" alt="Image Icon">

</div>
<div id="mainContainer" class="main-container"> </div>`;

const getData = async () => {
    try {
        const data=await fetch("https://api.openbrewerydb.org/breweries")
        const brewery= await data.json();
        mainContainer.innerHTML="";
        brewery.forEach((brewery) => {
            displayData(brewery)
        });
    } catch (error) {
        console.log(error)
    }
};

getData();
    const displayData = (data) => {
        mainContainer.innerHTML+=`
        <div class="breweryData" >
        <h3 class="c1">Brewery Name:<span> ${data.name} </span></h3>
        <p class="c1 c2">Type:<span> ${data.brewery_type}</span></p>
        <div class="address">
        <h3 class="c1"><span> Address: </span></h3>
        <p>City: <span>${data.city}</span><p>
        <p>State: <span>${data.state}</span></p>
        <p>Postal Code:<span> ${data.postal_code}</span></p>
        <p>Country: <span>${data.breweryCountry}</span></p>
        </div>
        <p>Brewery Link: <span>${data.website_url}</span></p>
        <p>Phone Number: <span>${data.phone}</span></p>
        `
    };


