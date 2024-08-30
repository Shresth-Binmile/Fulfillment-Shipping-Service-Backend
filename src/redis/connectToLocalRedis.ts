import {createClient} from 'redis'

const redisClient = createClient()

redisClient.on('error', function(err){
    console.log('Redis Client Error:', err)
})

export async function connectToLocalRedis() {
    await redisClient.connect()
}

export default redisClient