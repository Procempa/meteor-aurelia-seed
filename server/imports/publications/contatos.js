import { Meteor } from 'meteor/meteor';
import Contatos from '/imports/collections/contatos'

Meteor.publish("contatos", function(){
  return Contatos.find();
});
