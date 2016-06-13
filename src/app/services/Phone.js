function Phone($resource){
	'ngInject';
	const query = {
		method:'GET',
		params:{ phoneId:'phones' },
		isArray:true
	};

  return $resource(
  	'../data/:phoneId.json',
  	{},
  	{ query }
  );
}

export default Phone;