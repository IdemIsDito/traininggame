var configForDevelopment = {

};

var configForProduction = {

};
var config ;
if (window.location.hostname==='localhost') {
	config = configForDevelopment;
}
else{
	config = configForProduction;
}


export default config;
