import { Mongo } from 'meteor/mongo';
import moment from 'moment';

let Contatos = new Mongo.Collection('contatos');

Contatos.allow({
  insert: function(userId, document){
    document.createAt = moment().toDate();
    document.updateAt = moment().toDate();
    return true;
  },
  update: function(userId, doc, fieldNames, modifier){
    let set = (modifier.$set) ? modifier.$set : modifier.$unset;
    set.updateAt = moment().toDate();
    return true;
  },
  remove: function(userId){
    return true;
  }
});

export default Contatos;
