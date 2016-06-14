function Phone($resource) {

	const query = {
		method:'GET',
		params:{ phoneId:'phones' },
		isArray:true
	};

  return $resource(
  	'data/:phoneId.json',
  	{},
  	{ query }
  );
}

Phone.$inject = ['$resource'];

export default Phone;