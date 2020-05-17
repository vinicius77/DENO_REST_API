import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import people from "./data.js";

/** =============== CONTROLLERS ================== */
// @GET ALL
export const getPeople = ({ response }) => response.body = people;

// @GET /:name
export const getPerson = ({ params, response }) => {
  const person = people.filter((p) =>
    p.name.toLowerCase() === params.name.toLowerCase()
  );

  if (person.length) {
    response.status = 200;
    response.body = person[0];
    return;
  }

  response.status = 400;
  response.body = {
    message: `There is no ${request.params.name} on people's list`,
  };
};

// @POST /people
export const addPerson = async ({ request, response }) => {
  const body = await request.body();
  const person = body.value;
  people.push(person);

  response.body = { message: "Added Successfully" };
  response.status = 200;
};

// @PUT /people/:name
export const updatePerson = async ({ params, request, response }) => {
  const personToBeupdated = people.filter((person) =>
    person.name.toLowerCase() === params.name.toLowerCase()
  );

  const body = await request.body();
  const { age } = body.value;

  if (personToBeupdated.length) {
    personToBeupdated[0].age = age;
    response.status = 200;
    response.body = { message: "Successfully updated" };
    return;
  }

  response.status = 400;
  response.body = { message: `${name} was not found on people's list` };
};

// @DELETE /people/:name
export const removePerson = ({ params, response }) => {
  const peopleWithoutDeletedPerson = people.filter((person) =>
    person.name.toLowerCase() !== params.name.toLowerCase()
  );

  if (peopleWithoutDeletedPerson.length === people.length) {
    response.status = 400;
    response.body = { message: `Cannot find ${params.name} on people's list` };
    return;
  }

  response.body = {
    message: "Successfully deleted",
    peopleWithoutDeletedPerson,
  };
  response.status = 200;
};
/** ============================================== */

/** =============== ROUTES ================== */
const peoplerouter = new Router();

peoplerouter
  .get("/people", getPeople)
  .get("/people/:name", getPerson)
  .post("/people", addPerson)
  .put("/people/:name", updatePerson)
  .delete("/people/:name", removePerson);

/** ========================================= */

const app = new Application();

app.use(peoplerouter.routes());
app.use(peoplerouter.allowedMethods());

export default app;
