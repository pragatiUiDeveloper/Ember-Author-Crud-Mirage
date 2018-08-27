import Route from '@ember/routing/route';

export default Route.extend({
	flashMessages:Ember.inject.service(),
	model(){
		const flashMessages = Ember.get(this, 'flashMessages');
		//var self=this;
		var newAuthor = this.store.createRecord('author',
			  {
				  name: 'Quartinon',
				  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/elliotnolten/128.jpg',
				  age: 3,
				  admin: false
				
			});

			//return newAuthor.save();
			return newAuthor.save()
			  .then((res) => {
		        flashMessages.success('Successfully created new author!');	
		        //self.transitionTo('author');     
		      })
		      .catch((err) => {
		        flashMessages.danger('Something went wrong!');
		      });
			
	}

});
