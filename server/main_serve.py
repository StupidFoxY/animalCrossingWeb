import os
import yaml
from aiohttp import web
import aiohttp_cors

from utils.mongodb import MongoDB

from routes.animal import Animal

# loader config.yaml
configFile = os.path.abspath(os.path.expanduser('config.yaml'))
with open(configFile, 'r') as f:
    config = yaml.load(f)

HTTP_SERVER = config['http-server']
MONGODB = config['mongodb']

# collect mongodb
collections = MongoDB.connect(config=MONGODB)
Animal(animal=collections['animal'])

# set routes
app = web.Application()

# cors
cors = aiohttp_cors.setup(app,defaults={
    "*":aiohttp_cors.ResourceOptions(
            allow_credentials = True,
            expose_headers = "*",
            allow_headers = "*",
        )
    })

# animal
cors.add(app.router.add_get('/animal_list', Animal.get_animal_list))
cors.add(app.router.add_get('/animal_count', Animal.get_animal_count))

# run server
if __name__ == '__main__':
    web.run_app(app, host=HTTP_SERVER['host'], port=HTTP_SERVER['port'])
