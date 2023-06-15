const express = require('express');
// criando o servidor e guardando dentro do app
const app = express();
// ensinando o app a usar bodys do tipo json
app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];
// verbo para pegar informações
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'alive!' });
});

app.get('/activities', (req, res) => {
  res.status(200).json(activities);
});

app.get('/activities', (req, res) => {
  console.log('QUERY', req.query);
  const { status } = req.query;
  let filteredActivities = activities;
  if (status) {
    filteredActivities = activities.filter((activity) => activity.status === status);
  }
  res.status(200).json(filteredActivities);
});

// verbo para criar algo
app.post('/activities', (req, res) => {
  activities.push(req.body);
  res.status(201).json(req.body);
});

app.get('/activities/:id/:name', (req, res) => {
  console.log('PARAMS', req.params);
  // aqui tudo o que vem a após activities/ são lidos como parâmetros
  // PARAMS { id: '1', name: 'gabi' }
  // tudo o que vem de params, é string

  const activity = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(activity);
});

// verbo para update
app.put('/activities/:id', (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;
  let alteredActivity;
  for (let i = 0; i < activities.length; i += 1) {
    const activity = activities[i];
    if (activity.id === Number(id)) {
      activity.description = description;
      activity.status = status;
      alteredActivity = activity;
    }
  }
  res.status(200).json(alteredActivity);
});

// verbo para deletar
app.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = activities.findIndex((activity) => activity.id === Number(id));
  activities.splice(arrayPosition, 1);
  res.status(200).json(activities);
});

module.exports = app;