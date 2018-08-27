import { helper } from '@ember/component/helper';

export function addOne(params/*, hash*/) {
	//const number=parseFloat(params);
  return params + '    ~ I am  young ;) ';
}

export default helper(addOne);
