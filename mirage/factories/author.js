import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
	  srNo(i) {
    return `Person ${i}`;
  },
  
  name:faker.name.firstName,

  age: 28,

  admin: false,

  hobbies: [
	  {
	  	hobbyValue:'Swimming',
	  	hobbyCode:'01'
	  },
	  {
	  	hobbyValue:'Dancing',
	  	hobbyCode:'02'
	  },
	  {
	  	hobbyValue:'Singing',
	  	hobbyCode:'03'
	  },
	  {
	  	hobbyValue:'Tripping',
	  	hobbyCode:'04'
	  },
	  {
	  	hobbyValue:'Running',
	  	hobbyCode:'05'
	  },
	  {
	  	hobbyValue:'Movies',
	  	hobbyCode:'06'
	  }
  ],

  avatar() {
    return faker.internet.avatar();
  }
});
