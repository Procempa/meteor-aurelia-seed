import './main.html';
import './styles/bootstrap.less';
import './styles/font-awesome.scss';

//modules
import './pages/paginaExemplo1/exemplo1';
import './pages/paginaExemplo2/exemplo2';
import './pages/contato/contato';

export class App {
	configureRouter(config, router) {
		config.title = "Meteor Aurelia Seed";
		config.map([
			{ route: '', redirect: 'exemplo1' },
			{
				route: "exemplo1",
				name: "exemplo1",
				moduleId: "./pages/paginaExemplo1/exemplo1",
				nav: true,
				title: "Exemplo 1"
			}, {
				route: "exemplo2",
				name: "exemplo2",
				moduleId: "./pages/paginaExemplo2/exemplo2",
				nav: true,
				title: "Exemplo 2"
			}, {
				route: "contato",
				name: "contato",
				moduleId: "./pages/contato/contato",
				nav: true,
				title: "Contatos"
			}
		]);
		this.router = router;
	}
}
