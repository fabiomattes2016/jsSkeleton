class App {
  render() {
    let html = `
      <br />
      <div class="text-center mx-auto">
        <p class="text-success">JS Skeleton - Estrutura Básica para projetos Javascript</p>
        <img src="https://media.giphy.com/media/93j3soUou1gaHJpY4Q/giphy.gif" alt="Skeleton" height="400">
        <br />
        <hr />
        <a class="btn btn-success" href="https://github.com/fabiomattes2016/jsSkeleton" target="_blank">GitHub</a>
      </div>
    `;

    let app = document.getElementById("app");
    app.innerHTML = html;
  }
}

let chargeHtml = new App();

chargeHtml.render();
