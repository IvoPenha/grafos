
const vertices = [0, 1, 2, 3];
const edges = [[0, 1], [1, 2], [2, 3], [3, 0]];

function isRegular(vertices, edges) {
  // Calculamos o grau de cada vertice contando o numero de restas incidentes
  const degrees = new Array(vertices.length).fill(0);
  for (const [vertex1, vertex2] of edges) {
    degrees[vertex1]++;
    degrees[vertex2]++;
  }

  // Checando se tem o mesmo grau
  const degree = degrees[0];
  for (const d of degrees) {
    if (d !== degree) return false;
  }

  // Se tiver o msm grau retorna true
  return true;
}

// isRegular is true
const isRegularVar = isRegular(vertices, edges);

console.log(isRegularVar)

//-------------------------------------------------------

function isRound(vertices, edges) {
  // Calculamos o grau de cada vertice contando o numero de restas incidentes
  const degrees = new Array(vertices.length).fill(0);
  for (const [vertex1, vertex2] of edges) {
    degrees[vertex1]++;
    degrees[vertex2]++;
  }

  // Checando se tem grau 2
  for (const d of degrees) {
    if (d !== 2) return false;
  }

  // Se todos tiverem grau 2 é roda e retorna true
  return true;
}


const isRound = isRound(vertices, edges);
// isRound is true