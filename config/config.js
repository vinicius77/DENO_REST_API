//"Deno.env.toObject()" => Adds environmental variables
const env = Deno.env.toObject();
const PORT = env.PORT || 5000;
const HOST = env.HOST || "127.0.0.1";

export { PORT, HOST };
