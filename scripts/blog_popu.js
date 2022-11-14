function blogLoad() {
  for (let i in blog_dict) {
    let divclass = i % 2 === 0 ? 'post_section_even' : 'post_section_odd'

    let insert = `
    <div class="${divclass}">
      <h3>${blog_dict[i]["Title"]}</h3>
      <p>${blog_dict[i]["Paragraph"]}</p>
    </div>`

    let ele = document.getElementById('content');
    ele.innerHTML += insert;
  }
}