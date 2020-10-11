const crossroads = require('crossroads')
const hasher = require('hasher')
const $ = require('jquery')(window)
const Handlebars = require('handlebars')

let home = `
      <br />
      <div class="text-center mx-auto">
        <p class="text-success">JS Skeleton - Estrutura Básica para projetos Javascript</p>
        <img src="https://media.giphy.com/media/93j3soUou1gaHJpY4Q/giphy.gif" alt="Skeleton" height="400">
        <br />
        <br />
        <br />
        <a class="btn btn-success" href="https://github.com/fabiomattes2016/jsSkeleton" target="_blank">GitHub</a>
      </div>
    `

let nova = `
  <h1>Nova Rota</h1>
`

let ping = `
  <div id='ping'>Loading...</div>
  <script type='text/x-handlebars-template' id='ping-template'>
    {{#each people}}
    <div>
      <strong>Nome: </strong> {{nome}}<br>
      <strong>Email: </strong> {{email}}<br>
      <strong>Cidade: </strong> {{endereco.cidade}}<br>
    </div>
    <br>
    {{/each}}
  </script>
`

crossroads.addRoute('/', () => {
  render(home)
});

crossroads.addRoute('nova', () => {
  render(nova)
});

crossroads.addRoute('ping', () => {
  jQuery.ajax({
    url: `http://localhost/backend/echo.php?t=${new Date().getTime()}`,
  }).done(function (pong) {
    render(ping)
    // console.log(JSON.parse(pong))

    const templateString = jQuery("#ping-template").html()
    const personTemplate = Handlebars.compile(templateString)
    const html = personTemplate({ people: JSON.parse(pong) })

    jQuery("#ping").html(html)

    // console.log(html)
  })
});

function render(component) {
  let app = document.getElementById("app");
  app.innerHTML = ''
  app.innerHTML = component
}

function parseHash(newHash, oldHash) {
  crossroads.parse(newHash);
}

hasher.initialized.add(parseHash);
hasher.changed.add(parseHash);
hasher.init();
