// Function to create Element :
function ele(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  
  // Create all elements :
  let container = ele("div", "container", "", "");
  let h1 = ele("h1", "rounded text-center p-3 text-primary", "", "DIGIMON ADVENTURE");
  const p = ele(
    "p",
    "text-center fs-3 text-dark",
    "",
    "Show All Digimon"
  );
  const row = ele("div", "row mb-3", "", "");
  
  // Fetch API :
  const url1 = fetch("https://digimon-api.vercel.app/api/digimon");
  url1
    .then((data1) => data1.json()) //convert to json format and to object
    .then((result1) => {
      const obj = result1;
      // console.log(obj);
      for (i = 0; i < obj.length; i++) {
        const col = document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 mb-3";
        col.innerHTML = `
        <div class="card h-100">
        <div class="card-header text-bg-warning">
        <h5 class="card-title text-center"><strong class="text-primary">Digimon Name : </strong>${obj[i].name}</h5></div>
        <div class="img-box">
        <img src="${obj[i].img}" class="card-img-top" alt="${obj[i].name}" />
        <div class="card-body text-bg-dark text-warning">
        <p class="card-text"><strong class="text-white">Level : </strong>${obj[i].level}</P>
        </div>
       </div>
        `;
        row.append(col);
      }
      container.append(row);
      document.body.append( h1,p, container);
    });
  
  