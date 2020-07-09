import motor.motor_asyncio

class MongoDB(object):
    """docstring for MongoDB."""

    def __init__(self, arg):
        super(MongoDB, self).__init__()
        self.arg = arg

    def connect(config):
        '''
        create connection session to handle `get/put/delete` operation.
        param config: configure connection information.
        type config: dict.
        '''
        if config['username'] and config['password']:
            url = '{}://{}:{}@{}:{}/{}'.format(config['protocal'],
                                               config['username'],
                                               config['password'],
                                               config['host'],
                                               config['port'],
                                               config['database'])
        else:
            url = '{}://{}:{}/{}'.format(config['protocal'],
                                         config['host'],
                                         config['port'],
                                         config['database'])

        client = motor.motor_asyncio.AsyncIOMotorClient(url)
        db = client[config['database']]
        collections = {}
        for collection in config['collections']:
            collections[collection] = db[collection]
        #
        # if config['expire']['status'] in ['enabled']:
        #     await coll.create_index(config['expire']['rule'],
        #                             expireAfterSeconds=int(config['expire']['seconds']),
        #                             )
        return collections

    # @param        {collection}       [db collection]
    # @param        {query}            [Query conditions]
    # @param        {projection}       [return key]
    async def find_one(collection, **kwargs):
        query = kwargs.get('query',None)
        projection = kwargs.get('projection',None)
        document = await collection.find_one(query,projection)
        return document;

    async def find(collection, **kwargs):
        query = kwargs.get('query',None)
        projection = kwargs.get('projection',None)
        documents = []
        async for document in collection.find(query,projection):
            documents.append(document)

        return documents;
