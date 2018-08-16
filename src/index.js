// content of index.js
const http = require('http');
const port = 3000;

var SwaggerPetstore = require('swagger_petstore');

var api = new SwaggerPetstore.PetApi();

const requestHandler = (request, response) => {

    api.getPetById(
        123,
        function(error, data, apiResponse) {
            if (error) {
                console.error(error);
            } else {
                console.log('API called successfully.');
                response.end(JSON.stringify(apiResponse.body));
            }
        }
    );

};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
