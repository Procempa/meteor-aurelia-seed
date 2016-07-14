Meteor.publish("contatos", function(){
  return Contatos.find();
});
