import { types } from 'mobx-state-tree';
import { RootStore } from '../models';
import NetworkUtils from '../utils/NetworkUtils';

const customJSONParser = (data) => {
	console.log('====== RESPONSE STARTS ======== ');
	//console.log(data);
	const jsonData = JSON.parse(data);
	console.log(jsonData);
	console.log('====== RESPONSE ENDS ======== ');
	return jsonData;
};


const requestConfig = {
	jsonSerializer: {
		parse: customJSONParser,
		stringify: JSON.stringify,
	},
	headers: {
		'Content-Type': 'application/json',
	},
	
};

const rootStore = RootStore.create(undefined, {
	gqlHttpClient: NetworkUtils.getGraphQLHTTPClient(requestConfig),
});

export default rootStore;