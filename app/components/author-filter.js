import Component from '@ember/component';

const {
	get,
	set
	}=Ember;

export default Component.extend({
	tagName:'form',
	classNames:['center'],
	authors:null,// this is required for this component to work
	firstAuthor:null,
	filteredAuthor:null,
	//store: Ember.inject.service(),
	authors: null,

	init(){
		this._super(...arguments);
		//super is bas class version of this class,
		//arguments are whatever arguments we are passing
		console.log('init');	
	},
	didReceiveAttrs(){
		this._super(...arguments);
		console.log('didReceiveAttrs',get(this,'authors'));

		let authors=Ember.get(this,'authors');
		set(this,'filteredAuthor',authors);
	},
	willRender(){
		this._super(...arguments);
		console.log('willRender');
	},
	didInsertElement(){
		this._super(...arguments);
		console.log('didInsertElement');
	},
	didRender(){
		this._super(...arguments);
		console.log('didRender');			
	},
	didUpdateAttrs() {
    	this._super(...arguments);
    	console.log('didUpdateAttrs');			
	},

	actions:{
		filteredListOfAuthors(){
			let firstAuthor=get(this,'firstAuthor');
			let authors=get(this,'authors');
			let narrowedAuthorList= authors.findBy('name',firstAuthor);
			if(narrowedAuthorList){
				set(this,'filteredAuthor',[narrowedAuthorList]);
			}
			else{
				set(this,'filteredAuthor',authors);
			}
		}
	}

});
