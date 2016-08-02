import { Meteor } from 'meteor/meteor';
import Contatos from '/client&server/collections/contatos'

Meteor.publish("contatos", function () {
	return Contatos.find();
});
