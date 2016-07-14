import moment from 'moment';

Contatos = new Mongo.Collection('contato');

Contatos.allow({
  insert: function(userId, document){
    document.createAt = moment().toDate();
    document.updateAt = moment().toDate();
    return true;
  },
  update: function(userId, doc, fieldNames, modifier){
    console.log(JSON.stringify(doc, null, "  "));
    set = (modifier.$set) ? modifier.$set : modifier.$unset;
    set.updateAt = moment().toDate();
    return true;
  },
  remove: function(userId){
    return true;
  }
});
