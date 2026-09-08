const names = ["Danilo", "Pedro", "João", "Arthur"];

const jsonString = JSON.stringify(names); // Transformou em JSON string


const jsonNames = `["Danilo", "Pedro", "João", "Arthur"]`;

const parsedData = JSON.parse(jsonNames); // Transformou em objeto JavaScript