import Route from '@ember/routing/route';

export default Route.extend({
	flashMessages:Ember.inject.service(),
	model(params){
		//return this.store.findAll('author');
		return this.store.findRecord('author',params.authorId);
	},

	 setupController: function(controller, model) {
	 	model.set('admin', true);
	    controller.set('model', model);
	 },
		
	actions:{
    	adminToggled(choice) {
		    console.log("changing admin choice", choice);
		    this.controller.set('admin', choice);
		},
		delete(authorId){
			const flashMessages = Ember.get(this, 'flashMessages');
			var self=this;
			this.store.findRecord('author', authorId, { backgroundReload: false }).then(function(post) {
			  post.deleteRecord();
			  post.get('isDeleted'); // => true
			   post.save().then((res) => {
		        flashMessages.success('Deleted Author!');
		        self.transitionTo('author');
		      })
		      .catch((err) => {
		        flashMessages.danger('Something went wrong!');
		      });
			
			});
		},
		edit(authorId){
			this.transitionTo('author.edit',authorId);		
		}
	}
});
