from aiohttp import web
from utils.mongodb import MongoDB

animalDB = None

class Animal(object):
    """docstring for Animal."""

    def __init__(self, animal):
        super(Animal, self).__init__()
        global animalDB
        animalDB = animal

    async def get_animal_count(request):
        x = await MongoDB.find(animalDB)
        lenth = len(x)
        return web.json_response(lenth)

    async def get_animal_list(request):
        x = await MongoDB.find(animalDB)
        # return web.Response(text='animal_list')
        return web.json_response(x)
