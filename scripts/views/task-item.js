export default Backbone.View.extend({
  template : JST['task-item'],
  className : 'task',
},

initialize: function(){
  this.render();
},

render: function(){
  this.$el.append(this.template(this.model.toJSON()));
}

});
