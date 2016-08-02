//Client startup

import "aurelia-polyfills";
import aureliaBootstrapper from "aurelia-bootstrapper-meteor";
import { LogManager } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';

import "bootstrap";
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/scss/font-awesome.scss';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

aureliaBootstrapper
	.bootstrap(aurelia => {
		aurelia
			.use
			.globalResources(
				// imports globais utilizados em "views" ao invés de usar a tag <require>
				// filtros conversores ex.: "client/_resources/converters/date"
			)
			.standardConfiguration()
			// .developmentLogging()
		;
		aurelia
			.start()
			.then(() => aurelia.setRoot("client/main", document.body));
	});
