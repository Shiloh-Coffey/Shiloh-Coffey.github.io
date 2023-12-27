function blogLoad() {
  for (let i in blog_dict) {

    let insert = `
    <div class="container">
      <section class="ff7-text-box">
        <div class="character-info">
          <div class="pointer-hand-container">
            <img class="pointer-hand" src="../images/pointing-hand.png" alt="Pointer Hand">
          </div>
          <div class="character-name">${blog_dict[i]["Title"]}</div>
        </div>
        <div class="text-content">
          <p>${blog_dict[i]["Paragraph"]}</p>
        </div>
      </section>
    </div>
    <br>
    <br>
    `

    let ele = document.getElementById('content');
    ele.innerHTML += insert;
  }
}