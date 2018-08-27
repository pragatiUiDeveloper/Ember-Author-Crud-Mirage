import Route from '@ember/routing/route';

export default Route.extend({
	flashMessages:Ember.inject.service(),
	model(params){
		return this.store.findRecord('author',params.authorId);
	},
	actions:{
		saveEdit(model){
			const flashMessages = Ember.get(this, 'flashMessages');
			var self=this;
			this.get('store').findRecord('author', model.id).then(function(author) {
			  author.setProperties(model);
			  author.save()
			  .then((res) => {
		        flashMessages.success('Done Editing!');
		        self.transitionTo('author');
		      })
		      .catch((err) => {
		        flashMessages.danger('Something went wrong!');
		      });
			});			
		},
		cancelEdit(model){
			model.get('hasDirtyAttributes'); //=> true
			model.changedAttributes();       //=> {whatever changed }
			model.rollbackAttributes();
		}
	}
});
